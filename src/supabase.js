import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fdkfprtaelzzgmqpavmx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZka2ZwcnRhZWx6emdtcXBhdm14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYyMTE4NzksImV4cCI6MjAyMTc4Nzg3OX0.By8GvXlw6EquiBvMwKO-j0SnDH74DuPlhBqbA23r3lk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
