// Simple fetch implementation for Cloudflare Workers
export function createFetch() {
    return (url, init) => {
      return fetch(url, init);
    };
  }