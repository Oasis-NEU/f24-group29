import { createClient } from '@supabase/supabase-js'

const supaURL = "https://xdhbbzyluaxwjosurggh.supabase.co";
const supaAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkaGJienlsdWF4d2pvc3VyZ2doIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkxMTc0NDIsImV4cCI6MjA0NDY5MzQ0Mn0.07yOFnNTVTxJWCqCZcPhA8ohMG3E9gtvhCuPFC2Pdmg"

export const supabase = createClient(supaURL, supaAnonKey);