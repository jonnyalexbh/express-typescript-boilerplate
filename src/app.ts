import express from 'express';
import routes from './routes';

const app = express();

// Configure routes
routes(app);

export default app;
