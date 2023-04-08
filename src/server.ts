import app from './app';
import { appDataSource } from './config/typeorm';

const port = 3000;

const server = async () => {
  try {
    await appDataSource.initialize();

    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  } catch (error) {
    console.error(error);
  }
};

server();
