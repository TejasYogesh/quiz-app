import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://scdioqlfyuhmcazolfus.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjZGlvcWxmeXVobWNhem9sZnVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYyOTAxNDgsImV4cCI6MjA3MTg2NjE0OH0.mnjXb4c0v7DGdposQfwZ7p3GePYMwLgmYzH5fsQi1JI';

export const supabase = createClient(supabaseUrl, supabaseKey);