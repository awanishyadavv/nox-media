// app/blog/page.tsx
import type { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Search } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import BlogContent from './blog-content'

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

// This is the initial data we'll provide to the client component
const initialPosts = [
  {
    title: "10 SEO Strategies That Actually Work in 2025",
    excerpt:
      "Discover the most effective SEO strategies that are driving results in today's competitive digital landscape.",
    date: "Mar 10, 2025",
    image: "https://cdn.shopify.com/s/files/1/0733/5270/8348/files/7484896.jpg",
    category: "SEO",
    link: "/blog/seo-strategies",
  },
  {
    title: "The Future of Web Design: Trends to Watch",
    excerpt: "Explore the emerging web design trends that are shaping the future of digital experiences.",
    date: "Mar 5, 2025",
    image: "https://cdn.shopify.com/s/files/1/0733/5270/8348/files/high-tech-view-futuristic-earth.png",
    category: "Web Design",
    link: "/blog/web-design-trends",
  },
  {
    title: "How to Create a Social Media Strategy That Converts",
    excerpt:
      "Learn how to develop a social media strategy that drives engagement and converts followers into customers.",
    date: "Feb 28, 2025",
    image:
      "https://cdn.shopify.com/s/files/1/0733/5270/8348/files/social-media-marketing-concept-marketing-with-applications.jpg",
    category: "Social Media",
    link: "/blog/social-media-strategy",
  },
  {
    title: "The Impact of AI on Digital Marketing",
    excerpt: "How artificial intelligence is revolutionizing the way brands connect with their audiences online.",
    date: "Feb 15, 2025",
    image: "https://cdn.shopify.com/s/files/1/0733/5270/8348/files/7484896.jpg",
    category: "AI",
    link: "/blog/ai-digital-marketing",
  },
  {
    title: "Mobile-First Design: Best Practices for 2025",
    excerpt: "Essential strategies for creating mobile-optimized websites that convert and engage users.",
    date: "Feb 10, 2025",
    image: "https://cdn.shopify.com/s/files/1/0733/5270/8348/files/2727507.jpg",
    category: "Mobile",
    link: "/blog/mobile-first-design",
  },
  {
    title: "Content Marketing Strategies for B2B Companies",
    excerpt: "Effective content marketing approaches specifically tailored for business-to-business organizations.",
    date: "Jan 28, 2025",
    image: "https://cdn.shopify.com/s/files/1/0733/5270/8348/files/1690.jpg",
    category: "Content Marketing",
    link: "/blog/b2b-content-marketing",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Header />
      <BlogContent initialPosts={initialPosts} />
      <Footer />
    </div>
  )
}