import { Request, Response } from 'express';

export default (_: Request, res: Response): Response => res.status(200).send({ uptime: process.uptime() });
