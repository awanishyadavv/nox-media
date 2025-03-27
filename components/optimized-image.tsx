"use client"

import Image, { type ImageProps } from "next/image"
import { useState } from "react"

interface OptimizedImageProps extends Omit<ImageProps, "onError" | "onLoad"> {
  fallbackSrc?: string
}

export default function OptimizedImage({
  src,
  alt,
  fallbackSrc = "/placeholder.svg",
  className,
  ...props
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(typeof src === "string" ? src : fallbackSrc)
  const [isLoading, setIsLoading] = useState(true)

  return (
    <Image
      src={imgSrc || "/placeholder.svg"}
      alt={alt || "Image"}
      className={`${className} ${isLoading ? "animate-pulse bg-gray-800" : ""}`}
      onError={() => {
        setImgSrc(fallbackSrc)
        setIsLoading(false)
      }}
      onLoad={() => setIsLoading(false)}
      {...props}
    />
  )
}

