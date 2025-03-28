// // let userConfig = undefined
// // try {
// //   userConfig = await import('./v0-user-next.config')
// // } catch (e) {
// //   // ignore error
// // }

// // /** @type {import('next').NextConfig} */
// // const nextConfig = {
// //   eslint: {
// //     ignoreDuringBuilds: true,
// //   },
// //   typescript: {
// //     ignoreBuildErrors: true,
// //   },
// //   images: {
// //     unoptimized: true,
// //   },
// //   experimental: {
// //     webpackBuildWorker: true,
// //     parallelServerBuildTraces: true,
// //     parallelServerCompiles: true,
// //   },
// // }

// // mergeConfig(nextConfig, userConfig)

// // function mergeConfig(nextConfig, userConfig) {
// //   if (!userConfig) {
// //     return
// //   }

// //   for (const key in userConfig) {
// //     if (
// //       typeof nextConfig[key] === 'object' &&
// //       !Array.isArray(nextConfig[key])
// //     ) {
// //       nextConfig[key] = {
// //         ...nextConfig[key],
// //         ...userConfig[key],
// //       }
// //     } else {
// //       nextConfig[key] = userConfig[key]
// //     }
// //   }
// // }

// // export default nextConfig

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ['images.unsplash.com', 'source.unsplash.com'],
//     unoptimized: true, // This is needed for Cloudflare Workers
//   },
//   output: 'standalone', // Required for generating .next/standalone/server.js
//   experimental: {
//     // These help with build performance
//     webpackBuildWorker: true,
//     parallelServerBuildTraces: true,
//     parallelServerCompiles: true,
//   },
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com'],
    unoptimized: true, // This is needed for Cloudflare Workers
  },
  output: 'standalone', // Required for generating .next/standalone/server.js
  experimental: {
    // These help with build performance
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  // Properly handle Node.js built-ins for Next.js 15.x
  serverExternalPackages: [],
  // Modify imports specifically for Cloudflare compatibility
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Mark Node.js built-ins as external to prevent bundling
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        'fs/promises': false,
        os: false,
        crypto: false,
      };
      
      // Replace Node.js module imports with prefixed versions
      config.plugins.push({
        apply(compiler) {
          compiler.hooks.compilation.tap('ReplaceNodeImports', compilation => {
            compilation.hooks.optimizeModules.tap('ReplaceNodeImports', modules => {
              modules.forEach(module => {
                if (module.resource && module.resource.includes('node_modules')) {
                  return;
                }
                
                if (module.dependencies) {
                  module.dependencies.forEach(dep => {
                    if (dep.request === 'fs' || dep.request === 'path' || 
                        dep.request === 'fs/promises' || dep.request === 'crypto') {
                      dep.request = `node:${dep.request}`;
                    }
                  });
                }
              });
            });
          });
        }
      });
    }
    return config;
  },
};

export default nextConfig;