// components/optimized-image-gallery.tsx
"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ImageItem {
  src: string
  alt: string
  width: number
  height: number
  blurDataUrl?: string
}

interface OptimizedImageGalleryProps {
  images: ImageItem[]
  className?: string
}

export function OptimizedImageGallery({ images, className }: OptimizedImageGalleryProps) {
  const [visibleImages, setVisibleImages] = useState<number[]>([0, 1])
  const galleryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Load more images when the gallery comes into view
            const nextBatch = images.map((_, i) => i).filter(i => !visibleImages.includes(i))
            if (nextBatch.length > 0) {
              setVisibleImages(prev => [...prev, ...nextBatch.slice(0, 4)])
            }
            // Disconnect once we've loaded all images
            if (visibleImages.length + 4 >= images.length) {
              observer.disconnect()
            }
          }
        })
      },
      { threshold: 0.1 }
    )

    if (galleryRef.current) {
      observer.observe(galleryRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [images, visibleImages])

  return (
    <div 
      ref={galleryRef} 
      className={cn("grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4", className)}
    >
      {images.map((image, index) => (
        <div 
          key={`image-${index}`} 
          className="relative aspect-video overflow-hidden rounded-md"
        >
          {visibleImages.includes(index) ? (
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              placeholder={image.blurDataUrl ? "blur" : "empty"}
              blurDataURL={image.blurDataUrl}
              className="object-cover w-full h-full transition-opacity duration-300"
              priority={index < 2}
              loading={index < 2 ? "eager" : "lazy"}
            />
          ) : (
            <div className="w-full h-full bg-gray-200 animate-pulse" />
          )}
        </div>
      ))}
    </div>
  )
}