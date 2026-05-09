import { createClient } from '@supabase/supabase-js';
import { projectSeedData } from '../data.js';
import fs from 'fs';
import path from 'path';
import 'dotenv/config';
import { fileURLToPath } from 'url';
import crypto from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase environment variables (SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY)');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function main() {
  console.log('🚀 Starting project data injection...');

  // 1. Ensure storage bucket exists
  const { data: buckets, error: listError } = await supabase.storage.listBuckets();
  if (listError) {
    console.error('Error listing buckets:', listError);
    return;
  }

  const bucketExists = buckets.some(b => b.name === 'projects-images');
  if (!bucketExists) {
    console.log('Creating projects-images bucket...');
    const { error: createBucketError } = await supabase.storage.createBucket('projects-images', {
      public: true,
    });
    if (createBucketError) {
      console.error('Error creating bucket:', createBucketError);
      return;
    }
  }

  for (const project of projectSeedData) {
    const filename = project.image.split('/').pop();
    const filePath = path.join(process.cwd(), 'projects-images', filename);

    console.log(`Processing project: ${project.translations.en.title}...`);

    let finalImageUrl = project.image;

    if (fs.existsSync(filePath)) {
      console.log(`  Uploading ${filename} to Supabase Storage...`);
      const fileBuffer = fs.readFileSync(filePath);
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('projects-images')
        .upload(filename, fileBuffer, {
          contentType: 'image/jpeg',
          upsert: true,
        });

      if (uploadError) {
        console.error(`  ❌ Error uploading ${filename}:`, uploadError.message);
      } else {
        const { data: { publicUrl } } = supabase.storage
          .from('projects-images')
          .getPublicUrl(filename);
        
        finalImageUrl = publicUrl;
        console.log(`  ✅ Image uploaded: ${finalImageUrl}`);
      }
    } else {
      console.warn(`  ⚠️ Local file not found: ${filePath}. Using original source.`);
    }

    // 2. Insert into DB using Supabase client
    try {
      const { error: dbError } = await supabase
        .from('Project')
        .insert({
          id: crypto.randomUUID(),
          order: project.order,
          category: project.category,
          image: finalImageUrl,
          images: [],
          titleEn: project.translations.en.title,
          titleFr: project.translations.fr.title,
          labelEn: project.translations.en.label,
          labelFr: project.translations.fr.label,
          metaEn: project.translations.en.meta,
          metaFr: project.translations.fr.meta,
          descriptionEn: project.translations.en.description,
          descriptionFr: project.translations.fr.description,
          updatedAt: new Date().toISOString()
        });

      if (dbError) {
        console.error(`  ❌ Database error for ${project.translations.en.title}:`, dbError.message);
      } else {
        console.log(`  ✨ Project injected successfully!`);
      }
    } catch (err) {
      console.error(`  ❌ Unexpected error:`, err.message);
    }
  }

  console.log('\n✅ All data processed.');
}

main().catch((e) => {
  console.error('FATAL ERROR:', e);
  process.exit(1);
});
