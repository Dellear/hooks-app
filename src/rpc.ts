import { setupHttpClient } from '@midwayjs/rpc';

setupHttpClient({
  baseURL:
    process.env.NODE_ENV ===
    'development'
      ? 'http://localhost:3000'
      : 'https://localhost:3000',
});