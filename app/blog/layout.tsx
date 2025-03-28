import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Digital Marketing & Web Development Insights',
  description: 'Stay updated with the latest trends in web development, SEO, digital marketing, and more. Expert insights and strategies from NOX Media.',
  keywords: ['digital marketing blog', 'web development blog', 'SEO tips', 'social media strategy', 'content marketing'],
  openGraph: {
    title: 'Blog | Digital Marketing & Web Development Insights',
    description: 'Stay updated with the latest trends in web development, SEO, digital marketing, and more. Expert insights and strategies from NOX Media.',
    url: 'https://www.noxmedia.in/blog',
    type: 'website',
    images: [
      {
        url: 'https://www.noxmedia.in/blog-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NOX Media Blog',
      },
    ],
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}