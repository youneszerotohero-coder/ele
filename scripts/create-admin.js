import { createClient } from '@supabase/supabase-js';
import bcrypt from 'bcryptjs';
import 'dotenv/config';

const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase URL or Service Role Key in .env');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const [email, password] = process.argv.slice(2);

if (!email || !password) {
  console.log('Usage: node scripts/create-admin.js <email> <password>');
  process.exit(1);
}

async function createAdmin() {
  console.log(`Creating user: ${email}...`);
  
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const { data: existingUser } = await supabase
      .from('User')
      .select('id')
      .eq('email', email)
      .single();

    let user;

    if (existingUser) {
      const { data, error } = await supabase
        .from('User')
        .update({ password: hashedPassword })
        .eq('id', existingUser.id)
        .select()
        .single();
      
      if (error) throw error;
      user = data;
    } else {
      const { data, error } = await supabase
        .from('User')
        .insert({
          id: crypto.randomUUID(),
          email,
          password: hashedPassword,
          name: 'Admin'
        })
        .select()
        .single();

      if (error) throw error;
      user = data;
    }

    console.log('Admin user created/updated successfully in the database!');
    console.log('User ID:', user.id);
  } catch (error) {
    console.error('Error creating user:', error.message);
  }
}

createAdmin();
