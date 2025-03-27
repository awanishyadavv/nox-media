// components/canonical-url.tsx
"use client"

import Head from 'next/head'
import { usePathname } from 'next/navigation'

interface CanonicalProps {
  path?: string; // Optional override path
}

export default function Canonical({ path }: CanonicalProps) {
  const pathname = usePathname()
  const baseUrl = 'https://www.noxmedia.in' // Replace with your actual domain
  const canonicalUrl = path ? `${baseUrl}${path}` : `${baseUrl}${pathname}`

  return (
    <Head>
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  )
}