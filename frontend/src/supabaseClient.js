import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uuabrsmatqrbopwebemg.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1YWJyc21hdHFyYm9wd2ViZW1nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1OTA5MDIsImV4cCI6MjA2ODE2NjkwMn0.z00L07Lq7ILA3eW6YjF1A64dHNiKa23324YaCy7IA2U'

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase
