import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://lwccjbvtdegnwainynho.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3Y2NqYnZ0ZGVnbndhaW55bmhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIyMjY1NTAsImV4cCI6MjA2NzgwMjU1MH0.WVef4txKQIECm_QpLYZHn7Ct6THAOt65Df6XJgENS0w";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);