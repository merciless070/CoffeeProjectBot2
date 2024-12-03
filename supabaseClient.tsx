// здесь определяем клиент для взаимодействия с Supabase

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://iczpbcbhefhecatbyocp.supabase.co'; // Project URL
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImljenBiY2JoZWZoZWNhdGJ5b2NwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIzMzYyNTUsImV4cCI6MjA0NzkxMjI1NX0.RWweFr-GCF8UZiu_wI2erBL19EyaHWl1k08Nnzvr4aw'; // API Key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
