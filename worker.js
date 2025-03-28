import { createFetch } from 'node:http';

// Adapter function for Cloudflare Workers
export default {
  async fetch(request, env, ctx) {
    // Create a Node.js compatible fetch implementation
    const nodeFetch = createFetch({
      // This converts from a Cloudflare Request to a Node.js request
      Request: Request,
      // This converts from a Node.js response to a Cloudflare Response
      Response: Response,
    });

    // Import the Next.js server
    const { default: server } = await import('./server.js');

    try {
      // Pass the request to the Next.js server
      return await server(request, nodeFetch);
    } catch (error) {
      // Basic error handling
      return new Response(`Server error: ${error.message}`, { status: 500 });
    }
  },
};