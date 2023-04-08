import 'reflect-metadata';
import { resolve } from 'path';
import { DataSource } from 'typeorm';

export const appDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'secret1189',
  database: 'jabhdb',
  synchronize: false,
  logging: false,
  entities: [resolve(__dirname, '..', './entities/**/*')],
  migrations: [resolve(__dirname, '..', 'database/migrations/*{.ts,.js}')],
  subscribers: [],
});
