import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import multer from 'multer';
import {
  clearSessionCookie,
  createSessionCookie,
  isAuthenticated,
  requireAdmin,
  validateAdminCredentials,
} from './auth.js';
import { deleteProject, fetchMongoProjects, getFallbackProjects, insertProject, normalizeProject } from './projects.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const uploadsDir = path.join(__dirname, 'uploads');

dotenv.config({ path: path.join(rootDir, '.env'), quiet: true });
dotenv.config({ path: path.join(__dirname, '.env.local'), quiet: true });

fs.mkdirSync(uploadsDir, { recursive: true });

const app = express();
const port = Number(process.env.PORT || 4000);
const imageUpload = multer({
  storage: multer.diskStorage({
    destination: uploadsDir,
    filename: (_req, file, cb) => {
      const extension = path.extname(file.originalname || '').toLowerCase() || '.jpg';
      const safeName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${extension}`;
      cb(null, safeName);
    },
  }),
  limits: {
    fileSize: 6 * 1024 * 1024,
  },
  fileFilter: (_req, file, cb) => {
    if (file.mimetype?.startsWith('image/')) {
      cb(null, true);
      return;
    }

    cb(new Error('Only image uploads are allowed'));
  },
});

app.use(cors({ origin: process.env.CORS_ORIGIN || true }));
app.use(express.json());
app.use('/api/project-images', express.static(path.join(rootDir, 'projects-images')));
app.use('/api/uploads', express.static(uploadsDir));

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.get('/api/projects', async (req, res) => {
  const lang = req.query.lang === 'fr' ? 'fr' : 'en';

  try {
    const projects = await fetchMongoProjects(lang);

    if (projects.length > 0) {
      res.json({ source: 'mongodb', projects });
      return;
    }

    res.json({
      source: 'fallback',
      projects: getFallbackProjects(lang),
      message: 'MongoDB returned no projects, using bundled fallback projects.',
    });
  } catch (error) {
    res.status(200).json({
      source: 'fallback',
      projects: getFallbackProjects(lang),
      message: error.message,
    });
  }
});

app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;

  if (!validateAdminCredentials(username, password)) {
    res.status(401).json({ message: 'Invalid username or password' });
    return;
  }

  res.setHeader('Set-Cookie', createSessionCookie());
  res.json({ ok: true, username: process.env.ADMIN_USERNAME || 'admin' });
});

app.post('/api/admin/logout', (_req, res) => {
  res.setHeader('Set-Cookie', clearSessionCookie());
  res.json({ ok: true });
});

app.get('/api/admin/me', (req, res) => {
  if (!isAuthenticated(req)) {
    res.status(401).json({ authenticated: false });
    return;
  }

  res.json({ authenticated: true, username: process.env.ADMIN_USERNAME || 'admin' });
});

app.get('/api/admin/projects', requireAdmin, async (_req, res) => {
  try {
    res.json({ projects: await fetchMongoProjects('en') });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/api/admin/projects', requireAdmin, imageUpload.single('image'), async (req, res) => {
  try {
    const image = req.file ? `/api/uploads/${req.file.filename}` : req.body.imageUrl;
    const project = {
      category: req.body.category,
      image,
      translations: {
        en: {
          title: req.body.titleEn,
          label: req.body.labelEn,
          meta: req.body.metaEn,
          description: req.body.descriptionEn,
        },
        fr: {
          title: req.body.titleFr,
          label: req.body.labelFr,
          meta: req.body.metaFr,
          description: req.body.descriptionFr,
        },
      },
    };

    const missingField = [
      ['category', project.category],
      ['image', project.image],
      ['English title', project.translations.en.title],
      ['French title', project.translations.fr.title],
      ['English type', project.translations.en.label],
      ['French type', project.translations.fr.label],
    ].find(([, value]) => !String(value || '').trim());

    if (missingField) {
      res.status(400).json({ message: `${missingField[0]} is required` });
      return;
    }

    const insertedProject = await insertProject(project);
    res.status(201).json({ project: normalizeProject(insertedProject, 'en') });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete('/api/admin/projects/:id', requireAdmin, async (req, res) => {
  try {
    const result = await deleteProject(req.params.id);

    if (!result.deletedCount) {
      res.status(404).json({ message: 'Project not found' });
      return;
    }

    res.json({ ok: true });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const server = app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});

server.keepAliveTimeout = 65000;
