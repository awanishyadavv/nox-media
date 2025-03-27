// lib/image-loading-strategy.ts

/**
 * Image Loading Strategy for optimal Core Web Vitals
 * 
 * This utility provides a strategy for loading images in a way that optimizes
 * Core Web Vitals metrics like Largest Contentful Paint (LCP) and Cumulative
 * Layout Shift (CLS).
 */

interface ImageLoadingOptions {
    priority?: boolean; // True for LCP images
    lazyBoundary?: string; // Distance from viewport to start loading
    quality?: number; // Image quality (1-100)
    sizes?: string; // Responsive sizes
  }
  
  export type ImageLCP = 'high' | 'medium' | 'low';
  
  /**
   * Determines optimal loading strategy for an image based on its importance
   */
  export function getImageLoadingStrategy(lcpImportance: ImageLCP = 'medium'): ImageLoadingOptions {
    switch (lcpImportance) {
      case 'high':
        // Critical above-the-fold images that impact LCP
        return {
          priority: true, // Turns off lazy loading, preloads image
          quality: 85, // Good quality but still optimized
          sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
        };
      
      case 'medium':
        // Important images just below the fold
        return {
          priority: false,
          lazyBoundary: '300px', // Start loading when within 300px of viewport
          quality: 80,
          sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
        };
      
      case 'low':
        // Non-critical images well below the fold
        return {
          priority: false,
          lazyBoundary: '100px', // Start loading when closer to viewport
          quality: 75, // More compression for less important images
          sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
        };
    }
  }
  
  /**
   * Get appropriate srcSets for responsive images
   */
  export function getResponsiveSrcSet(basePath: string): string {
    // Check if basePath is external or data URL
    if (basePath.startsWith('data:') || basePath.startsWith('blob:') || basePath.startsWith('http')) {
      return '';
    }
    
    // Generate multiple sizes for responsive loading
    const widths = [320, 640, 768, 1024, 1280, 1536];
    return widths
      .map(width => {
        // Handle placeholder SVGs
        if (basePath.includes('placeholder.svg')) {
          return `${basePath}?width=${width} ${width}w`;
        }
        
        // Parse URL to separate path and query params
        const [path, query] = basePath.split('?');
        const extension = path.split('.').pop() || '';
        const baseName = path.substring(0, path.lastIndexOf('.'));
        
        // Construct responsive image URL
        return `${baseName}-${width}.${extension}${query ? `?${query}` : ''} ${width}w`;
      })
      .join(', ');
  }
  
  /**
   * Preload critical LCP images
   * Call this function for critical hero images
   */
  export function preloadCriticalImage(src: string): void {
    if (typeof document === 'undefined') return;
    
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  }
  
  /**
   * Calculate aspect ratio to prevent CLS during image loading
   */
  export function getAspectRatioStyle(width: number, height: number): React.CSSProperties {
    const paddingTop = (height / width) * 100;
    return {
      position: 'relative',
      paddingTop: `${paddingTop}%`,
      overflow: 'hidden',
    };
  }