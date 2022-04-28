import express from 'express';
import * as routes from './src/routes';

const app = express();

routes.init(app);

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
