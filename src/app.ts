import express from 'express';
import * as routes from './routes';
import errorHandler from './middlewares/error_handler';

const app = express();

routes.init(app);

app.use(errorHandler);

export default app;
