"use client"

import { useState, useEffect } from "react"

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    // Initialize with the current state on client side
    const media = window.matchMedia(query)
    setMatches(media.matches)

    // Create a listener function
    const listener = (e: MediaQueryListEvent) => {
      setMatches(e.matches)
    }

    // Add the listener
    media.addEventListener("change", listener)

    // Clean up
    return () => {
      media.removeEventListener("change", listener)
    }
  }, [query])

  return matches
}

