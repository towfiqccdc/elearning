// Connects the site to your Supabase project.
// Requires the Supabase library to be loaded BEFORE this file:
// <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js"></script>

const SUPABASE_URL = "https://dshoaghuyztzggxtqtit.supabase.co";
// The anon key is designed to be public. Never put the service_role key here.
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzaG9hZ2h1eXp0emdneHRxdGl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAxNzA4MzIsImV4cCI6MjEwNTc0NjgzMn0.-ghur85QfYMuLiHFE8HhgwxwzPEl9RaS2QR4qJhFHxE";

// Named "sb" because the library itself already uses the global name "supabase".
window.sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
