// supabase.js
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://fruwyrldqkxmnrojtobb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZydXd5cmxkcWt4bW5yb2p0b2JiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc4NTgzNDgsImV4cCI6MTk5MzQzNDM0OH0.0D74FcgHeOl8-hZOOC2qbCGD6pOWMv1YedOpFayiqsU"
);

export default supabase;
