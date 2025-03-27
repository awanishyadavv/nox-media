// Utility for secure form submissions
export async function secureSubmit<T>(
  url: string,
  data: Record<string, any>,
  options?: {
    method?: "POST" | "PUT" | "PATCH"
    headers?: Record<string, string>
    onProgress?: (progress: number) => void
  },
): Promise<T> {
  // Ensure HTTPS
  if (typeof window !== "undefined" && window.location.protocol !== "https:" && process.env.NODE_ENV === "production") {
    // Redirect to HTTPS in production
    window.location.href = window.location.href.replace("http:", "https:")
    throw new Error("Insecure connection. Redirecting to HTTPS.")
  }

  const method = options?.method || "POST"

  // Add CSRF token if available
  const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute("content")

  const headers = {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    ...(csrfToken ? { "X-CSRF-Token": csrfToken } : {}),
    ...options?.headers,
  }

  try {
    const response = await fetch(url, {
      method,
      headers,
      body: JSON.stringify(data),
      credentials: "same-origin", // Include cookies
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => null)
      throw new Error(errorData?.message || `Request failed with status ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Form submission error:", error)
    throw error
  }
}

