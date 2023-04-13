import createError from 'http-errors';
import { NextFunction, Request, Response } from 'express';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  const error = createError.isHttpError(err)
    ? err
    : createError.InternalServerError('An internal server error was occurred');

  res.status(error.status).send({
    message: error.message,
    internal_code: error.name,
  });
};

export default errorHandler;
