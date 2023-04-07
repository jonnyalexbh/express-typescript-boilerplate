import express from 'express';
import * as routes from './src/routes';
import { AppDataSource } from './src/data-source';

const app = express();
const port = 3000;

routes.init(app);

AppDataSource.initialize()
  .then(() => {
    console.log('Bien');
  })
  .catch((error) => console.log(error));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
