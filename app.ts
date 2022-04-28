import express from 'express';

const app = express();

app.get('/', (_, res) => {
  res.status(200).send({ message: 'Hello World' })
});

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
