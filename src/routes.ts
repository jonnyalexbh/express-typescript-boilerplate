import { Application, Request, Response } from 'express';

import { User } from './entities/user';
import { healthCheck } from './controllers/health_check';

export const init = (app: Application): void => {
  app.get('/health', healthCheck);

  app.get('/users', async (_: Request, res: Response) => {
    const users = await User.find();
    res.send(users);
  });
};
