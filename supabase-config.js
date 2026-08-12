// Supabase Configuration
// IMPORTANT: Replace these with your actual Supabase project credentials
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';

// Initialize Supabase client
let supabase;

try {
  // Dynamic import for browser compatibility
  const { createClient } = await import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm');
  
  if (SUPABASE_URL !== 'YOUR_SUPABASE_URL' && SUPABASE_ANON_KEY !== 'YOUR_SUPABASE_ANON_KEY') {
    supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    console.log('Supabase initialized successfully');
  } else {
    console.warn('Supabase not configured. Using localStorage fallback mode.');
  }
} catch (error) {
  console.error('Failed to initialize Supabase:', error);
}

export { supabase, SUPABASE_URL, SUPABASE_ANON_KEY };
