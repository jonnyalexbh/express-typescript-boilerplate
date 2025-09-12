import { Application, Request, Response } from 'express';

const routes = (app: Application): void => {
  app.get('/', (_: Request, res: Response) =>
    res.status(200).json({ message: 'Ok' })
  );
};

export default routes;
