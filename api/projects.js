import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { lang, id } = req.query;
  const language = lang === 'fr' ? 'fr' : 'en';

  try {
    const supabase = createClient(supabaseUrl, supabaseKey);
    let query = supabase.from('Project').select('*');
    
    if (id) {
      query = query.eq('id', id).single();
    } else {
      query = query.order('order', { ascending: true }).order('createdAt', { ascending: true });
    }

    const { data, error } = await query;

    if (error) throw error;

    if (id) {
      const project = data;
      res.status(200).json({
        id: project.id,
        category: project.category,
        image: project.image,
        images: project.images || [],
        title: language === 'fr' ? project.titleFr : project.titleEn,
        label: language === 'fr' ? project.labelFr : project.labelEn,
        meta: language === 'fr' ? project.metaFr : project.metaEn,
        description: language === 'fr' ? project.descriptionFr : project.descriptionEn,
      });
      return;
    }

    const projects = data;
    const normalizedProjects = projects.map(project => ({
      id: project.id,
      category: project.category,
      image: project.image,
      images: project.images || [],
      title: language === 'fr' ? project.titleFr : project.titleEn,
      label: language === 'fr' ? project.labelFr : project.labelEn,
      meta: language === 'fr' ? project.metaFr : project.metaEn,
      description: language === 'fr' ? project.descriptionFr : project.descriptionEn,
    }));

    res.status(200).json({ source: 'supabase', projects: normalizedProjects });
  } catch (error) {
    console.error('Supabase Error:', error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
}
