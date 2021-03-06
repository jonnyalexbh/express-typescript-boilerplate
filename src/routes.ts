import { Application } from 'express';
import healthCheck from './controllers/health_check';

export default (app: Application): void => {
  /* health */
  app.get('/health', healthCheck);

  /*  */
  app.get('/', (req, res) => {
    res.status(200).send({ message: 'Hello World' });
  });
};
