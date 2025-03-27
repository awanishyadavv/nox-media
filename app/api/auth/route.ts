import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    // Simple authentication logic
    // In a real app, you would validate against a database and use proper password hashing
    if (email === "admin@noxmedia.com" && password === "nox123media") {
      return NextResponse.json({
        success: true,
        message: "Authentication successful",
        token: "demo-token-" + Date.now(), // Generate a simple token
      })
    }

    // Authentication failed
    return NextResponse.json(
      {
        success: false,
        message: "Invalid email or password",
      },
      { status: 401 },
    )
  } catch (error) {
    console.error("Authentication error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred during authentication",
      },
      { status: 500 },
    )
  }
}

