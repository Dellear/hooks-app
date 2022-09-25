import { setupHttpClient } from '@midwayjs/rpc';
import type { Middleware } from '@midwayjs/rpc';

const logger: Middleware = async (
  ctx,
  next
) => {
  console.log(`<-- ${ctx.req.url}`);
  await next();
  console.log(
    `--> ${ctx.req.url} ${ctx.res}`
  );
};

const ErrorHandler: Middleware = async (
  ctx,
  next
) => {
try {
  await next();
} catch (err) {
  switch (err.status) {
  case 401:
      location.href = '/login';
      break;
  case 500:
      alert('Internal Server Error');
      break;
  default:
      alert(
      `Unknown Error, status: ${err.status}`
      );
      break;
  }
}
};

setupHttpClient({
  baseURL:
    process.env.NODE_ENV ===
    'development'
      ? 'http://localhost:3000'
      : '',
    middleware: [logger, ErrorHandler],
});