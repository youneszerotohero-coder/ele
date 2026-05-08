import dotenv from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { getMongoConfig, getProjectsCollection } from './mongo.js';
import { projectSeedData } from './projectSeedData.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

dotenv.config({ path: path.join(rootDir, '.env'), quiet: true });
dotenv.config({ path: path.join(__dirname, '.env.local'), quiet: true });

try {
  const collection = await getProjectsCollection();
  const { dbName, collectionName } = getMongoConfig();

  await collection.deleteMany({ seedGroup: 'saleg-portfolio' });
  await collection.insertMany(
    projectSeedData.map((project) => ({
      ...project,
      seedGroup: 'saleg-portfolio',
      updatedAt: new Date(),
    })),
  );

  console.log(`Seeded ${projectSeedData.length} projects into ${dbName}.${collectionName}`);
  process.exit(0);
} catch (error) {
  console.error(`Could not seed MongoDB: ${error.message}`);
  process.exit(1);
}
