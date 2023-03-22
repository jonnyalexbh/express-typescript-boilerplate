import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Ok' });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
})
