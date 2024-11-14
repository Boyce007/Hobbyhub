import { createClient } from "@supabase/supabase-js";
const URL = "https://gbvkolmtiihatcxjqglg.supabase.co"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdidmtvbG10aWloYXRjeGpxZ2xnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAyNTA2NTIsImV4cCI6MjA0NTgyNjY1Mn0.lOZVIoydChi7c6IaEW2OSc21VMLew7j5xeDnCNmqxyU"
export const supabase = createClient(URL,API_KEY)
export const getTimeSince = (timePosted) => {
    const now = new Date();
    const time = new Date(timePosted)
    const timeDifference = now - time;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(timeDifference / (1000 * 60));
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    if (seconds < 60) {
      return `${seconds} seconds ago`;
    } else if (minutes < 60) {
      return `${minutes} minutes ago`;
    } else if (hours < 24) {
      return `${hours} hours ago`;
    } else {
      return `${days} days ago`;
    }
  
  }