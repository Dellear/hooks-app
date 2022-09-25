import { createConfiguration, hooks } from '@midwayjs/hooks';
import * as Koa from '@midwayjs/koa';
import { logger } from './logger';
import cors from '@koa/cors';

/**
 * setup midway server
 */
export default createConfiguration({
  imports: [
    Koa, 
    hooks({
      middleware: [
        logger,
        cors({
          origin: '*',
          secureContext: true,
        }),
      ],
    }),
  ],
  importConfigs: [{ default: { keys: 'session_keys' } }],
});
