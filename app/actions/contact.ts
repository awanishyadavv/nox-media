"use server"

import { getServerClient } from "@/lib/supabase"
import { z } from "zod"

// Define a schema for form validation
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  budget: z.string().optional(),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => {
        if (!val) return true // Optional field
        // Allow any phone number with country code
        return /^\+\d{1,4}\d{4,14}$/.test(val.replace(/\s+/g, ""))
      },
      { message: "Please enter a valid phone number with country code" },
    ),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export async function submitContactForm(formData: ContactFormData) {
  try {
    // Validate the form data
    const validatedData = contactFormSchema.parse(formData)

    // Get the Supabase client
    const supabase = getServerClient()

    // Insert the form data into the contact_submissions table
    const { data, error } = await supabase
      .from("contact_submissions")
      .insert([
        {
          name: validatedData.name,
          email: validatedData.email,
          subject: validatedData.subject,
          message: validatedData.message,
          budget: validatedData.budget || null,
          phone: validatedData.phone || null, // Phone already includes country code
          created_at: new Date().toISOString(),
        },
      ])
      .select()

    if (error) {
      console.error("Error submitting contact form:", error)
      return { success: false, message: "Failed to submit form. Please try again." }
    }

    // Return success response
    return {
      success: true,
      message: "Your message has been received. We will contact you shortly!",
      data,
    }
  } catch (error) {
    console.error("Error in submitContactForm:", error)

    // Check if it's a validation error
    if (error instanceof z.ZodError) {
      const errorMessages = error.errors.map((err) => `${err.path}: ${err.message}`).join(", ")
      return { success: false, message: `Validation error: ${errorMessages}` }
    }

    return { success: false, message: "An unexpected error occurred. Please try again." }
  }
}

