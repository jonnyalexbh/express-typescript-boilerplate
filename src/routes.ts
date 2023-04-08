import { Application, Request, Response } from 'express';

import { User } from './entities/user';
import { appDataSource } from './config/typeorm';
import { healthCheck } from './controllers/health_check';

export const init = (app: Application): void => {
  app.get('/health', healthCheck);

  app.get('/users', async (_: Request, res: Response) => {
    const userRepository = appDataSource.getRepository(User);
    const users = await userRepository.find();
    res.send(users);
  });
};
