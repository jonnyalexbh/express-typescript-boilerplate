import express from 'express';
import routes from './src/routes';

const app = express();

routes(app);

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
