import { createClient } from '@supabase/supabase-js';
import jwt from 'jsonwebtoken';
import { Buffer } from 'buffer';
import crypto from 'crypto';

const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-key-123456789';
const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export default async function handler(req, res) {
  // Check authorization header
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: 'No authorization header' });
  }

  const token = authHeader.split(' ')[1];
  let decoded;

  try {
    decoded = jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  // Admin projects logic
  if (req.method === 'GET') {
    try {
      const { data: projects, error } = await supabase
        .from('Project')
        .select('*')
        .order('createdAt', { ascending: false });
      
      if (error) throw error;
      return res.status(200).json({ projects });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  if (req.method === 'POST') {
    try {
      const { 
        category, images, titleEn, titleFr, labelEn, labelFr, 
        metaEn, metaFr, descriptionEn, descriptionFr 
      } = req.body;

      const imageUrls = [];

      if (Array.isArray(images)) {
        await Promise.all(
          images.map(async (image) => {
            if (typeof image === 'string' && image.startsWith('data:image/')) {
              const match = image.match(/^data:image\/([a-zA-Z0-9]+);base64,(.+)$/);
              if (match) {
                const ext = match[1];
                const base64Data = match[2];
                const buffer = Buffer.from(base64Data, 'base64');
                const fileName = `projects/${crypto.randomUUID()}.${ext}`;

                const { error: uploadError } = await supabase.storage
                  .from('store')
                  .upload(fileName, buffer, {
                    contentType: `image/${ext}`
                  });

                if (uploadError) {
                   throw new Error(`Upload to Supabase failed: ${uploadError.message}`);
                }

                const { data: { publicUrl } } = supabase.storage
                  .from('store')
                  .getPublicUrl(fileName);

                imageUrls.push(publicUrl);
              }
            } else if (typeof image === 'string') {
              imageUrls.push(image);
            }
          })
        );
      }

      const { data: project, error } = await supabase
        .from('Project')
        .insert({
          id: crypto.randomUUID(),
          category,
          image: imageUrls.length > 0 ? imageUrls[0] : '',
          images: imageUrls,
          titleEn,
          titleFr,
          labelEn,
          labelFr,
          metaEn,
          metaFr,
          descriptionEn,
          descriptionFr,
          updatedAt: new Date().toISOString(),
        })
        .select()
        .single();

      if (error) throw error;
      return res.status(201).json({ project });
    } catch (error) {
      console.error('Project API error:', error);
      return res.status(500).json({ message: error.message, stack: error.stack });
    }
  }

  if (req.method === 'DELETE') {
    const { id } = req.query;
    try {
      const { error } = await supabase
        .from('Project')
        .delete()
        .eq('id', id);
        
      if (error) throw error;
      return res.status(200).json({ ok: true });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  return res.status(405).json({ message: 'Method not allowed' });
}
