// lib/seo-config.ts
/**
 * SEO Configuration for NOX Media Website
 * 
 * This file contains the central SEO configuration for the site,
 * including global settings and default values.
 */

export const siteConfig = {
    name: "NOX Media",
    url: "https://www.noxmedia.in",
    ogImage: "/images/og-image.jpg",
    description:
      "NOX Media provides expert web development and digital marketing services to help businesses grow their online presence and achieve their goals.",
    links: {
      twitter: "https://twitter.com/noxmedia",
      github: "https://github.com/noxmedia",
      linkedin: "https://linkedin.com/company/noxmedia",
    },
  }
  
  export const defaultSEO = {
    titleTemplate: "%s | NOX Media",
    defaultTitle: "NOX Media | Web Development & Digital Marketing Agency",
    description: siteConfig.description,
    canonical: siteConfig.url,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteConfig.url,
      siteName: siteConfig.name,
      images: [
        {
          url: `${siteConfig.url}${siteConfig.ogImage}`,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      handle: "@noxmedia",
      site: "@noxmedia",
      cardType: "summary_large_image",
    },
    additionalMetaTags: [
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        name: "apple-mobile-web-app-capable",
        content: "yes",
      },
      {
        name: "theme-color",
        content: "#000000",
      },
    ],
    additionalLinkTags: [
      {
        rel: "icon",
        href: "/favicon.ico",
      },
      {
        rel: "apple-touch-icon",
        href: "/apple-icon.png",
        sizes: "180x180",
      },
      {
        rel: "manifest",
        href: "/manifest.json",
      },
    ],
  }
  
  // SEO utility functions
  export const generatePageTitle = (title: string): string => {
    return title ? `${title} | ${siteConfig.name}` : defaultSEO.defaultTitle
  }
  
  export const generateCanonicalUrl = (path: string): string => {
    // Remove trailing slashes except for home page
    const cleanPath = path === "/" ? "/" : path.replace(/\/$/, "")
    return `${siteConfig.url}${cleanPath}`
  }
  
  interface PageSEOProps {
    title: string
    description?: string
    path: string
    image?: string
    type?: "website" | "article" | "product" | "profile"
    article?: {
      publishedTime: string
      modifiedTime?: string
      authors?: string[]
      tags?: string[]
    }
  }
  
  export const generatePageSEO = ({
    title,
    description = defaultSEO.description,
    path,
    image = siteConfig.ogImage,
    type = "website",
    article,
  }: PageSEOProps) => {
    const pageTitle = generatePageTitle(title)
    const canonicalUrl = generateCanonicalUrl(path)
    const ogImage = image.startsWith("http") ? image : `${siteConfig.url}${image}`
  
    return {
      title: pageTitle,
      description,
      canonical: canonicalUrl,
      openGraph: {
        type,
        url: canonicalUrl,
        title: pageTitle,
        description,
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
        ...article,
      },
    }
  }
  
  // Helper function to generate schema.org JSON-LD markup
  export const generateSchemaOrgJSONLD = (props: {
    path: string
    type: "website" | "article" | "organization" | "person" | "product" | "service" | "breadcrumb" | "faq"
    title: string
    description?: string
    image?: string
    datePublished?: string
    dateModified?: string
    authorName?: string
    organization?: {
      name: string
      logo: string
    }
    breadcrumbItems?: Array<{
      name: string
      item: string
    }>
    faqItems?: Array<{
      question: string
      answer: string
    }>
  }) => {
    const {
      path,
      type,
      title,
      description = defaultSEO.description,
      image = siteConfig.ogImage,
      datePublished,
      dateModified,
      authorName,
      organization,
      breadcrumbItems,
      faqItems,
    } = props
  
    const url = generateCanonicalUrl(path)
    const imageUrl = image.startsWith("http") ? image : `${siteConfig.url}${image}`
  
    // Base schema
    const schemaBase = {
      "@context": "https://schema.org",
    }
  
    // Generate different schema types
    let schema
  
    switch (type) {
      case "article":
        schema = {
          ...schemaBase,
          "@type": "Article",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": url,
          },
          headline: title,
          description,
          image: imageUrl,
          author: {
            "@type": "Person",
            name: authorName || "NOX Media",
          },
          publisher: {
            "@type": "Organization",
            name: organization?.name || siteConfig.name,
            logo: {
              "@type": "ImageObject",
              url: organization?.logo || `${siteConfig.url}/logo.png`,
            },
          },
          datePublished,
          dateModified: dateModified || datePublished,
        }
        break
  
      case "breadcrumb":
        schema = {
          ...schemaBase,
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbItems?.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.item.startsWith("http") ? item.item : `${siteConfig.url}${item.item}`,
          })),
        }
        break
  
      case "faq":
        schema = {
          ...schemaBase,
          "@type": "FAQPage",
          mainEntity: faqItems?.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
        break
  
      case "organization":
        schema = {
          ...schemaBase,
          "@type": "Organization",
          name: organization?.name || siteConfig.name,
          url: siteConfig.url,
          logo: organization?.logo || `${siteConfig.url}/logo.png`,
          sameAs: [
            siteConfig.links.twitter,
            siteConfig.links.github,
            siteConfig.links.linkedin,
          ],
        }
        break
  
      case "product":
      case "service":
        schema = {
          ...schemaBase,
          "@type": type === "product" ? "Product" : "Service",
          name: title,
          description,
          image: imageUrl,
          url,
        }
        break
  
      case "website":
      default:
        schema = {
          ...schemaBase,
          "@type": "WebSite",
          url,
          name: title,
          description,
        }
        break
    }
  
    return schema
  }