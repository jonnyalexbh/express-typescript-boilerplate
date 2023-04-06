import express from 'express';
import routes from './src/routes';

const app = express();
const PORT = 3000;

routes(app);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
})
