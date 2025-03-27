// import * as React from "react"
// import { Slot } from "@radix-ui/react-slot"
// import { ChevronRight, MoreHorizontal } from "lucide-react"

// import { cn } from "@/lib/utils"

// const Breadcrumb = React.forwardRef<
//   HTMLElement,
//   React.ComponentPropsWithoutRef<"nav"> & {
//     separator?: React.ReactNode
//   }
// >(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />)
// Breadcrumb.displayName = "Breadcrumb"

// const BreadcrumbList = React.forwardRef<
//   HTMLOListElement,
//   React.ComponentPropsWithoutRef<"ol">
// >(({ className, ...props }, ref) => (
//   <ol
//     ref={ref}
//     className={cn(
//       "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
//       className
//     )}
//     {...props}
//   />
// ))
// BreadcrumbList.displayName = "BreadcrumbList"

// const BreadcrumbItem = React.forwardRef<
//   HTMLLIElement,
//   React.ComponentPropsWithoutRef<"li">
// >(({ className, ...props }, ref) => (
//   <li
//     ref={ref}
//     className={cn("inline-flex items-center gap-1.5", className)}
//     {...props}
//   />
// ))
// BreadcrumbItem.displayName = "BreadcrumbItem"

// const BreadcrumbLink = React.forwardRef<
//   HTMLAnchorElement,
//   React.ComponentPropsWithoutRef<"a"> & {
//     asChild?: boolean
//   }
// >(({ asChild, className, ...props }, ref) => {
//   const Comp = asChild ? Slot : "a"

//   return (
//     <Comp
//       ref={ref}
//       className={cn("transition-colors hover:text-foreground", className)}
//       {...props}
//     />
//   )
// })
// BreadcrumbLink.displayName = "BreadcrumbLink"

// const BreadcrumbPage = React.forwardRef<
//   HTMLSpanElement,
//   React.ComponentPropsWithoutRef<"span">
// >(({ className, ...props }, ref) => (
//   <span
//     ref={ref}
//     role="link"
//     aria-disabled="true"
//     aria-current="page"
//     className={cn("font-normal text-foreground", className)}
//     {...props}
//   />
// ))
// BreadcrumbPage.displayName = "BreadcrumbPage"

// const BreadcrumbSeparator = ({
//   children,
//   className,
//   ...props
// }: React.ComponentProps<"li">) => (
//   <li
//     role="presentation"
//     aria-hidden="true"
//     className={cn("[&>svg]:w-3.5 [&>svg]:h-3.5", className)}
//     {...props}
//   >
//     {children ?? <ChevronRight />}
//   </li>
// )
// BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

// const BreadcrumbEllipsis = ({
//   className,
//   ...props
// }: React.ComponentProps<"span">) => (
//   <span
//     role="presentation"
//     aria-hidden="true"
//     className={cn("flex h-9 w-9 items-center justify-center", className)}
//     {...props}
//   >
//     <MoreHorizontal className="h-4 w-4" />
//     <span className="sr-only">More</span>
//   </span>
// )
// BreadcrumbEllipsis.displayName = "BreadcrumbElipssis"

// export {
//   Breadcrumb,
//   BreadcrumbList,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
//   BreadcrumbEllipsis,
// }


"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, Home } from 'lucide-react'

type BreadcrumbItem = {
  label: string
  path: string
  isCurrentPage?: boolean
}

type BreadcrumbsProps = {
  items?: BreadcrumbItem[]
  homeLabel?: string
  className?: string
  separator?: React.ReactNode
  includeHome?: boolean
}

export default function Breadcrumbs({
  items = [],
  homeLabel = 'Home',
  className = '',
  separator = <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />,
  includeHome = true,
}: BreadcrumbsProps) {
  const pathname = usePathname()
  
  // Auto-generate breadcrumbs from URL if no items are provided
  const breadcrumbs = items.length
    ? items
    : generateBreadcrumbs(pathname, homeLabel, includeHome)
  
  // Create schema.org breadcrumbs structured data
  const breadcrumbsSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@id': `https://www.noxmedia.in${item.path}`,
        'name': item.label,
      },
    })),
  }

  return (
    <>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      
      {/* Visual breadcrumbs */}
      <nav aria-label="Breadcrumb" className={`text-sm ${className}`}>
        <ol className="flex items-center flex-wrap">
          {breadcrumbs.map((item, index) => {
            const isLast = index === breadcrumbs.length - 1
            
            return (
              <li key={item.path} className="flex items-center">
                {index > 0 && separator}
                
                {isLast ? (
                  <span aria-current="page" className="text-gray-400">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.path}
                    className="text-purple-400 hover:text-purple-300 hover:underline"
                  >
                    {index === 0 && includeHome ? (
                      <span className="flex items-center">
                        <Home className="h-4 w-4 mr-1" />
                        {item.label}
                      </span>
                    ) : (
                      item.label
                    )}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}

// Helper function to generate breadcrumbs from URL path
function generateBreadcrumbs(
  pathname: string, 
  homeLabel: string,
  includeHome: boolean
): BreadcrumbItem[] {
  // Split and clean the path segments
  const segments = pathname
    .split('/')
    .filter(Boolean)
    .map(segment => {
      // Convert kebab-case or snake_case to Title Case
      const formatted = segment
        .replace(/-/g, ' ')
        .replace(/_/g, ' ')
        .replace(/\b\w/g, char => char.toUpperCase())
      
      return formatted
    })
  
  // Create breadcrumb items
  const breadcrumbs: BreadcrumbItem[] = []
  
  // Add home item
  if (includeHome) {
    breadcrumbs.push({ label: homeLabel, path: '/' })
  }
  
  // Add path segments
  let path = ''
  segments.forEach((segment, index) => {
    path += `/${segment.toLowerCase().replace(/\s+/g, '-')}`
    
    breadcrumbs.push({
      label: segment,
      path: path,
      isCurrentPage: index === segments.length - 1,
    })
  })
  
  return breadcrumbs
}