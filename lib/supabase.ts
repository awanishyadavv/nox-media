import { createClient, SupabaseClient } from "@supabase/supabase-js"

// Create a single supabase client for the browser
const createBrowserClient = () => {
  // Check if environment variables are available
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error("Supabase environment variables are missing. Using fallback URL and key.")
    // Use the environment variables we know are available from the PreviousChatSummary
    return createClient(
      process.env.SUPABASE_URL || "https://your-project-url.supabase.co",
      process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "fallback-key",
    )
  }

  return createClient(supabaseUrl, supabaseAnonKey)
}

// Create a single supabase client for server components
const createServerClient = () => {
  // Check if environment variables are available
  const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseServiceKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseServiceKey) {
    console.error("Supabase environment variables are missing for server client.")
    throw new Error("Supabase URL and service role key are required for server operations")
  }

  return createClient(supabaseUrl, supabaseServiceKey)
}

// Use the correct type that matches what createClient returns
// The type should be SupabaseClient<any, "public", any>
let browserClient: SupabaseClient<any, "public", any> | null = null

// Get the browser client (singleton pattern)
export const getBrowserClient = () => {
  if (!browserClient) {
    browserClient = createBrowserClient()
  }
  return browserClient
}

// Get the server client (created fresh each time)
export const getServerClient = () => {
  return createServerClient()
}

export {}