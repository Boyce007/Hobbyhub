import { createClient } from "@supabase/supabase-js";
const URL = "https://gbvkolmtiihatcxjqglg.supabase.co"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdidmtvbG10aWloYXRjeGpxZ2xnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAyNTA2NTIsImV4cCI6MjA0NTgyNjY1Mn0.lOZVIoydChi7c6IaEW2OSc21VMLew7j5xeDnCNmqxyU"
export const supabase = createClient(URL,API_KEY)