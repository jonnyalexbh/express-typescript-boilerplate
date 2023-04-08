import { Request, Response } from 'express';

export const healthCheck = (_: Request, res: Response): Response => {
  return res.status(200).send({ uptime: process.uptime() });
};
