// let userConfig = undefined
// try {
//   userConfig = await import('./v0-user-next.config')
// } catch (e) {
//   // ignore error
// }

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   images: {
//     unoptimized: true,
//   },
//   experimental: {
//     webpackBuildWorker: true,
//     parallelServerBuildTraces: true,
//     parallelServerCompiles: true,
//   },
// }

// mergeConfig(nextConfig, userConfig)

// function mergeConfig(nextConfig, userConfig) {
//   if (!userConfig) {
//     return
//   }

//   for (const key in userConfig) {
//     if (
//       typeof nextConfig[key] === 'object' &&
//       !Array.isArray(nextConfig[key])
//     ) {
//       nextConfig[key] = {
//         ...nextConfig[key],
//         ...userConfig[key],
//       }
//     } else {
//       nextConfig[key] = userConfig[key]
//     }
//   }
// }

// export default nextConfig

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
};

export default nextConfig;
