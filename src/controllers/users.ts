import { NextFunction, Request, Response } from 'express';
import { getUsers } from '../services/users';

export const users = (_: Request, res: Response, next: NextFunction): Promise<Response | void> =>
  getUsers()
    .then((users) => res.send(users))
    .catch(next);
