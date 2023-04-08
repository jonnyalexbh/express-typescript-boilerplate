import app from './app';
import { appDataSource } from './config/typeorm';
import logger from './logger';

const port = 3000;

const server = async () => {
  try {
    await appDataSource.initialize();

    app.listen(port, () => {
      logger.info(`🚀 Listening on port ${port}`);
    });
  } catch (error) {
    logger.error(error);
  }
};

server();
