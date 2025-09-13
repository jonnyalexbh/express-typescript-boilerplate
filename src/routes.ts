import { Application, Request, Response } from 'express';
import { registerUser } from './controllers/userController';
import { validateRequest } from './middlewares/validation';
import { userRegistrationSchema } from './schemas';

const routes = (app: Application): void => {
  app.get('/health', (_: Request, res: Response) => res.status(200).json({ message: 'Ok' }));

  app.post('/api/users/register', validateRequest(userRegistrationSchema), registerUser);
};

export default routes;
