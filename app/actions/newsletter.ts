"use server"

import { getServerClient } from "@/lib/supabase"
import { z } from "zod"

// Define a schema for newsletter subscription validation
const newsletterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
})

export type NewsletterData = z.infer<typeof newsletterSchema>

export async function subscribeToNewsletter(data: NewsletterData) {
  try {
    // Validate the email
    const validatedData = newsletterSchema.parse(data)

    // Get the Supabase client
    const supabase = getServerClient()

    // Check if the email already exists
    const { data: existingSubscriber, error: checkError } = await supabase
      .from("newsletter_subscriptions")
      .select("*")
      .eq("email", validatedData.email)
      .single()

    if (checkError && checkError.code !== "PGSQL_ERROR_NO_ROWS") {
      console.error("Error checking existing subscriber:", checkError)
      return { success: false, message: "Failed to process subscription. Please try again." }
    }

    // If the email already exists, return a message
    if (existingSubscriber) {
      return {
        success: true,
        message: "You're already subscribed to our newsletter!",
      }
    }

    // Insert the email into the newsletter_subscriptions table
    const { data: newSubscriber, error } = await supabase
      .from("newsletter_subscriptions")
      .insert([
        {
          email: validatedData.email,
          subscribed_at: new Date().toISOString(),
          status: "active",
        },
      ])
      .select()

    if (error) {
      console.error("Error subscribing to newsletter:", error)
      return { success: false, message: "Failed to subscribe. Please try again." }
    }

    // Return success response
    return {
      success: true,
      message: "Thank you for subscribing to our newsletter!",
      data: newSubscriber,
    }
  } catch (error) {
    console.error("Error in subscribeToNewsletter:", error)

    // Check if it's a validation error
    if (error instanceof z.ZodError) {
      const errorMessage = error.errors[0]?.message || "Invalid email address"
      return { success: false, message: errorMessage }
    }

    return { success: false, message: "An unexpected error occurred. Please try again." }
  }
}

