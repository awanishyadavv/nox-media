// import type React from "react"
// import type { Metadata } from "next"
// import { Inter } from "next/font/google"
// import "./globals.css"
// import { ThemeProvider } from "@/components/theme-provider"
// import { Toaster } from "@/components/ui/toaster"

// const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "NOX Media - Web Development & Digital Marketing Agency",
//   description: "Professional web development, SEO, and digital marketing services to grow your business online.",
//     generator: 'v0.dev'
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={inter.className}>
//         <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
//           {children}
//           <Toaster />
//         </ThemeProvider>
//       </body>
//     </html>
//   )
// }



// import './globals.css'


import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.noxmedia.in'),
  title: {
    default: "NOX Media - Web Development & Digital Marketing Agency",
    template: "%s | NOX Media"
  },
  description: "Professional web development, SEO, and digital marketing services to grow your business online with innovative solutions and proven strategies.",
  keywords: ["web development", "digital marketing", "SEO", "social media marketing", "UI/UX design", "e-commerce", "mobile apps"],
  authors: [{ name: "NOX Media Team" }],
  creator: "NOX Media",
  publisher: "NOX Media",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.noxmedia.in/',
    siteName: 'NOX Media',
    title: 'NOX Media - Web Development & Digital Marketing Agency',
    description: 'Professional web development, SEO, and digital marketing services to grow your business online.',
    images: [
      {
        url: 'https://www.noxmedia.in/og-image.jpg', // Replace with actual path
        width: 1200,
        height: 630,
        alt: 'NOX Media - Digital Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NOX Media - Web Development & Digital Marketing Agency',
    description: 'Professional web development, SEO, and digital marketing services to grow your business online.',
    images: ['https://www.noxmedia.in/twitter-image.jpg'], // Replace with actual path
    creator: '@noxmedia', // Replace with actual Twitter handle
    site: '@noxmedia', // Replace with actual Twitter handle
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code
    yandex: 'your-yandex-verification-code', // Replace with actual verification code if needed
    bing: 'your-bing-verification-code', // Replace with actual verification code if needed
  },
  generator: 'Next.js'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}