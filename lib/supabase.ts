import { createClient, SupabaseClient } from "@supabase/supabase-js"

// Define the type for your client schema (adjust as necessary)
type Database = any; // If you have a schema, replace `any` with your schema type

// Create a single Supabase client for the browser
const createBrowserClient = (): SupabaseClient<Database> => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error("Supabase environment variables are missing. Using fallback URL and key.")
    return createClient<Database>(
      process.env.SUPABASE_URL || "https://your-project-url.supabase.co",
      process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "fallback-key"
    )
  }

  return createClient<Database>(supabaseUrl, supabaseAnonKey)
}

// Create a single Supabase client for server components
const createServerClient = (): SupabaseClient<Database> => {
  const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseServiceKey) {
    console.error("Supabase environment variables are missing for server client.")
    throw new Error("Supabase URL and service role key are required for server operations")
  }

  return createClient<Database>(supabaseUrl, supabaseServiceKey)
}

// Browser client singleton
let browserClient: SupabaseClient<Database> | null = null

export const getBrowserClient = () => {
  if (!browserClient) {
    browserClient = createBrowserClient()
  }
  return browserClient
}

export const getServerClient = () => {
  return createServerClient()
}
