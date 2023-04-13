import { Application } from 'express';

import { healthCheck } from './controllers/health_check';
import { users } from './controllers/users';

export const init = (app: Application): void => {
  app.get('/health', healthCheck);

  /* users */
  app.get('/users', users);
};
