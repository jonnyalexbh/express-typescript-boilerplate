import { Request, Response } from 'express';
import { UserRegistrationData } from '../types/user';

export const registerUser = (req: Request, res: Response): void => {
  try {
    const userData: UserRegistrationData = req.body;

    res.status(201).json({ message: 'User registered successfully', user: userData });
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};
