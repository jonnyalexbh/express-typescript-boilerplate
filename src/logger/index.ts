import pino from 'pino';

const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      translateTime: true,
      colorize: true,
    },
  },
});

export default logger;
