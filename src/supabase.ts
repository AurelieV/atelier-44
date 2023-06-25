import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://uwfxygptfacdsyeeomyk.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3Znh5Z3B0ZmFjZHN5ZWVvbXlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYyMTgxNTQsImV4cCI6MjAwMTc5NDE1NH0.MBDNTbxpxIqm5ogGjHZh1JWCJtzWnZ02k2NE9XmPitw'
)
