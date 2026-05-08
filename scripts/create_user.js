import { createClient } from '@supabase/supabase-js';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import 'dotenv/config';

const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  const email = 'sarlsaleg@yahoo.fr';
  const plainPassword = 'Saleg/0123';
  const hashedPassword = await bcrypt.hash(plainPassword, 10);

  const { data, error } = await supabase
    .from('User')
    .insert({
      id: crypto.randomUUID(),
      email,
      password: hashedPassword,
      name: 'Admin',
    })
    .select()
    .single();

  if (error) {
    console.error('Error creating user:', error);
  } else {
    console.log('User created successfully:', data);
  }
}

main();
