import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://yanxsainxuigltbzoxiy.supabase.co";
const SUPABASE_KEY = "sb_publishable_nWI7wNr4yAyTSlwgd71l7A_6nYGXzEj";

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);
