import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mypqmtmznojjkyazgufe.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15cHFtdG16bm9qamt5YXpndWZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ0NjE3MTgsImV4cCI6MjAwMDAzNzcxOH0.ih_HRs_gHwezBPsKP_CKauEhM2LZka4Gw0Ld9AP507o";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
