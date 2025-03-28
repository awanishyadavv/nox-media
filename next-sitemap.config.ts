/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.noxmedia.in',
    generateRobotsTxt: false, // We created our custom robots.txt above
    generateIndexSitemap: true,
    outDir: 'public',
    exclude: ['/admin/*', '/signin', '/api/*'],
    alternateRefs: [
      {
        href: 'https://www.noxmedia.in',
        hreflang: 'en',
      },
    ],
    transform: async (config:any, path:any) => {
      // Custom transform function (optional)
      // This allows you to change the priority or changefreq for specific pages
      
      // Default priority and change frequency
      let priority = 0.7;
      let changefreq = 'weekly';
      
      // Custom rules
      if (path === '/') {
        // Homepage gets highest priority
        priority = 1.0;
        changefreq = 'daily';
      } else if (path.startsWith('/blog')) {
        // Blog pages
        priority = 0.8;
        changefreq = 'weekly';
      } else if (path.startsWith('/case-studies')) {
        // Case studies
        priority = 0.8;
        changefreq = 'monthly';
      } else if (path === '/contact') {
        // Contact page
        priority = 0.9;
        changefreq = 'monthly';
      } else if (path === '/about') {
        // About page
        priority = 0.8;
        changefreq = 'monthly';
      }
      
      return {
        loc: path, // URL of the page
        changefreq: changefreq,
        priority: priority,
        lastmod: new Date().toISOString(),
        alternateRefs: config.alternateRefs ?? [],
      };
    },
  };