import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://slrvyqokvwqwomnwkasd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNscnZ5cW9rdndxd29tbndrYXNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkyMDYxMjAsImV4cCI6MjAyNDc4MjEyMH0.40YoQyuONbemIbrE2mw0I5wjtG2P_HXLSD4MzxTeKvE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
