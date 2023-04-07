import { Application, Request, Response } from 'express';

import { AppDataSource } from './data-source';
import { User } from './entities/user';

export const init = (app: Application): void => {
  app.get('/', (_: Request, res: Response) => res.status(200).json({ message: 'Ok' }));

  app.get('/users', async (_: Request, res: Response) => {
    const userRepository = AppDataSource.getRepository(User);
    const users = await userRepository.find();
    res.send(users);
  });
};
