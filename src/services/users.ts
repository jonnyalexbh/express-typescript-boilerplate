import createError from 'http-errors';

import logger from '../logger';
import { User } from '../entities/user';

export const getUsers = (): Promise<User[]> =>
  User.find().catch((err) => {
    logger.error(err);
    throw createError.ServiceUnavailable(
      'An error has occurred when try to get all users because the database failure!'
    );
  });
