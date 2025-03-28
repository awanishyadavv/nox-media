// Simple Cloudflare Worker to serve the Next.js app
export default {
    async fetch(request, env, ctx) {
      try {
        // Import the Next.js server from the standalone build
        const { default: server } = await import('./server.js');
        
        // Call the server with the request
        return await server(request);
      } catch (error) {
        // Return a simple error response
        return new Response(`Server Error: ${error.message}`, {
          status: 500,
          headers: { 'Content-Type': 'text/plain' }
        });
      }
    }
  };