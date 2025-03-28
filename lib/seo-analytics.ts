// // lib/seo-analytics.ts
// /**
//  * SEO Analytics & Monitoring Configuration
//  * 
//  * This file contains utilities for tracking and monitoring SEO performance
//  * and integrating with Google Analytics 4, Google Search Console, and 
//  * other analytics tools.
//  */

// // Declare global gtag function
// declare global {
//   interface Window {
//     gtag?: (command: string, ...args: any[]) => void;
//     dataLayer?: any[];
//   }
// }

// // Google Analytics 4 setup
// export const initGA4 = (): void => {
//   // Check if running in browser
//   if (typeof window === 'undefined') return;

//   // Load GA4 tracking script dynamically
//   const script = document.createElement('script');
//   script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`;
//   script.async = true;
//   document.head.appendChild(script);

//   // Initialize GA4
//   window.dataLayer = window.dataLayer || [];
  
//   // Define gtag function
//   window.gtag = (...args: any[]) => {
//     window.dataLayer?.push(args);
//   };

//   // Configure GA4
//   window.gtag('js', new Date());
//   window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
//     page_path: window.location.pathname,
//     debug_mode: process.env.NODE_ENV !== 'production',
//   });
// };

// // Track page views
// export const trackPageView = (url: string): void => {
//   // Check if gtag is available
//   if (typeof window === 'undefined' || !window.gtag) return;
  
//   window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
//     page_path: url,
//   });
// };

// // Event tracking interface
// interface TrackEventParams {
//   action: string;
//   category: string;
//   label?: string;
//   value?: number;
// }

// // Track events
// export const trackEvent = ({
//   action,
//   category,
//   label,
//   value,
// }: TrackEventParams): void => {
//   // Check if gtag is available
//   if (typeof window === 'undefined' || !window.gtag) return;

//   window.gtag('event', action, {
//     event_category: category,
//     event_label: label,
//     value: value,
//   });
// };

// // SEO performance monitoring
// export const trackSEOMetrics = (): void => {
//   // Ensure we're in a browser environment
//   if (typeof window === 'undefined') return;

//   // Type definition for web-vitals metrics
//   type VitalMetric = {
//     value: number;
//     rating: 'good' | 'needs-improvement' | 'poor';
//   };

//   // Dynamically import web-vitals with explicit types
//   import('web-vitals').then((module) => {
//     const { getCLS, getFID, getLCP, getFCP, getTTFB } = module;

//     getCLS((metric: VitalMetric) => {
//       console.log('CLS:', metric.value);
//       trackEvent({
//         action: 'web_vitals',
//         category: 'Web Vitals',
//         label: 'CLS',
//         value: Math.round(metric.value * 100),
//       });
//     });

//     getFID((metric: VitalMetric) => {
//       console.log('FID:', metric.value);
//       trackEvent({
//         action: 'web_vitals',
//         category: 'Web Vitals',
//         label: 'FID',
//         value: Math.round(metric.value),
//       });
//     });

//     getLCP((metric: VitalMetric) => {
//       console.log('LCP:', metric.value);
//       trackEvent({
//         action: 'web_vitals',
//         category: 'Web Vitals',
//         label: 'LCP',
//         value: Math.round(metric.value),
//       });
//     });

//     getFCP((metric: VitalMetric) => {
//       console.log('FCP:', metric.value);
//       trackEvent({
//         action: 'web_vitals',
//         category: 'Web Vitals',
//         label: 'FCP',
//         value: Math.round(metric.value),
//       });
//     });

//     getTTFB((metric: VitalMetric) => {
//       console.log('TTFB:', metric.value);
//       trackEvent({
//         action: 'web_vitals',
//         category: 'Web Vitals',
//         label: 'TTFB',
//         value: Math.round(metric.value),
//       });
//     });
//   });
// };

// // Track scroll depth
// export const trackScrollDepth = (): (() => void) | null => {
//   // Ensure we're in a browser environment
//   if (typeof window === 'undefined') return null;

//   let scrolled25 = false;
//   let scrolled50 = false;
//   let scrolled75 = false;
//   let scrolled100 = false;

//   const trackScroll = () => {
//     const scrollTop = window.pageYOffset;
//     const docHeight = document.documentElement.scrollHeight - window.innerHeight;
//     const scrollPercent = (scrollTop / docHeight) * 100;

//     const checkScrollDepth = (percent: number, flag: boolean, label: string) => {
//       if (scrollPercent >= percent && !flag) {
//         trackEvent({
//           action: 'scroll_depth',
//           category: 'Engagement',
//           label: label,
//         });
//         return true;
//       }
//       return flag;
//     };

//     scrolled25 = checkScrollDepth(25, scrolled25, '25%');
//     scrolled50 = checkScrollDepth(50, scrolled50, '50%');
//     scrolled75 = checkScrollDepth(75, scrolled75, '75%');
//     scrolled100 = checkScrollDepth(90, scrolled100, '100%');
//   };

//   window.addEventListener('scroll', trackScroll);
//   return () => window.removeEventListener('scroll', trackScroll);
// };

// // SEO Analytics component
// export function SEOAnalytics() {
//   return null;
// }