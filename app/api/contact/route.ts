import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Validate required fields
    const { name, email, subject, message } = data

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ success: false, message: "Invalid email format" }, { status: 400 })
    }

    // In a real application, you would:
    // 1. Store the message in a database
    // 2. Send an email notification
    // 3. Possibly integrate with a CRM

    // For now, we'll simulate a successful submission
    console.log("Contact form submission:", { name, email, subject, message })

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 500))

    return NextResponse.json({
      success: true,
      message: "Your message has been received. We will contact you shortly!",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { success: false, message: "An error occurred while processing your request" },
      { status: 500 },
    )
  }
}

