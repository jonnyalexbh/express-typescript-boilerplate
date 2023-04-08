import express from 'express';
import * as routes from './routes';

const app = express();

routes.init(app);

export default app;
