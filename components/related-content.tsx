// components/related-content.tsx
"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

interface RelatedItem {
  id: string
  title: string
  slug: string
  excerpt: string
  category: string
  thumbnailUrl: string
}

interface RelatedContentProps {
  currentId: string
  currentCategory: string
  contentType: "blog" | "case-study" | "service"
  limit?: number
}

export function RelatedContent({ 
  currentId, 
  currentCategory, 
  contentType, 
  limit = 3 
}: RelatedContentProps) {
  const [relatedItems, setRelatedItems] = useState<RelatedItem[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchRelatedContent = async () => {
      try {
        // In a real implementation, you would fetch from your API
        // This is a mock implementation
        const response = await fetch(`/api/${contentType}s?category=${currentCategory}&exclude=${currentId}&limit=${limit}`)
        if (!response.ok) throw new Error('Failed to fetch related content')
        
        const data = await response.json()
        setRelatedItems(data)
      } catch (error) {
        console.error('Error fetching related content:', error)
        setRelatedItems([])
      } finally {
        setIsLoading(false)
      }
    }

    fetchRelatedContent()
  }, [currentId, currentCategory, contentType, limit])

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Array.from({ length: limit }).map((_, index) => (
          <Card key={index} className="animate-pulse">
            <div className="h-48 bg-gray-200 rounded-t-lg"></div>
            <CardHeader>
              <div className="h-6 bg-gray-200 rounded w-3/4"></div>
            </CardHeader>
            <CardContent>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  if (relatedItems.length === 0) {
    return null
  }

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-6">Related {contentType === 'blog' ? 'Articles' : contentType === 'case-study' ? 'Case Studies' : 'Services'}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedItems.map((item) => (
          <Link href={`/${contentType}s/${item.slug}`} key={item.id}>
            <Card className="h-full transition-all duration-300 hover:shadow-lg">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <Image
                  src={item.thumbnailUrl}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2">{item.title}</CardTitle>
                <CardDescription>{item.category}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3 text-sm text-gray-600">{item.excerpt}</p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center text-sm font-medium text-primary">
                  Read more <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

// components/contextual-navigation.tsx
"use client"

// import Link from "next/link"
import { usePathname } from "next/navigation"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

interface NavigationItem {
  title: string
  path: string
  description?: string
}

interface SectionNavigationProps {
  items: NavigationItem[]
  title: string
  description?: string
}

export function ContextualNavigation({ items, title, description }: SectionNavigationProps) {
  const pathname = usePathname()

  // Get current page index
  const currentIndex = items.findIndex(item => item.path === pathname)
  const nextItem = currentIndex >= 0 && currentIndex < items.length - 1 ? items[currentIndex + 1] : null
  const prevItem = currentIndex > 0 ? items[currentIndex - 1] : null

  return (
    <Card className="w-full mb-8">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <nav className="space-y-4">
          {items.map((item) => {
            const isActive = pathname === item.path
            
            return (
              <Link 
                href={item.path} 
                key={item.path}
                className={`
                  flex items-center p-3 rounded-md transition-colors
                  ${isActive 
                    ? 'bg-primary/10 text-primary font-medium' 
                    : 'hover:bg-gray-100'
                  }
                `}
              >
                {isActive && <ChevronRight className="mr-2 h-4 w-4" />}
                <div>
                  <div className={isActive ? 'font-medium' : ''}>{item.title}</div>
                  {item.description && (
                    <p className="text-sm text-muted-foreground line-clamp-1">
                      {item.description}
                    </p>
                  )}
                </div>
              </Link>
            )
          })}
        </nav>

        {/* Next/Previous navigation */}
        {(nextItem || prevItem) && (
          <div className="flex justify-between mt-6 pt-6 border-t">
            {prevItem ? (
              <Link 
                href={prevItem.path}
                className="flex items-center text-sm group"
              >
                <ChevronRight className="mr-1 h-4 w-4 rotate-180 group-hover:translate-x-[-2px] transition-transform" />
                <span>Previous: <span className="font-medium">{prevItem.title}</span></span>
              </Link>
            ) : <div />}
            
            {nextItem && (
              <Link 
                href={nextItem.path}
                className="flex items-center text-sm group ml-auto"
              >
                <span>Next: <span className="font-medium">{nextItem.title}</span></span>
                <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-[2px] transition-transform" />
              </Link>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}