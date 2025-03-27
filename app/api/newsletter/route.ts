import { NextResponse } from "next/server"
import { subscribeToNewsletter } from "@/app/actions/newsletter"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Validate email
    const { email } = data

    if (!email) {
      return NextResponse.json({ success: false, message: "Email is required" }, { status: 400 })
    }

    // Use the server action to subscribe to the newsletter
    const result = await subscribeToNewsletter({ email })

    if (!result.success) {
      return NextResponse.json({ success: false, message: result.message }, { status: 400 })
    }

    return NextResponse.json({
      success: true,
      message: result.message,
    })
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return NextResponse.json(
      { success: false, message: "An error occurred while processing your request" },
      { status: 500 },
    )
  }
}

