// src/lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

// Fallback a URL simulada válida para evitar caídas durante la compilación/prerender si aún no se cargaron las variables en Vercel
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
