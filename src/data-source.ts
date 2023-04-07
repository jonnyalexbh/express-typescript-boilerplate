import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entities/user';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'secret1189',
  database: 'jabhdb',
  synchronize: true,
  logging: true,
  entities: [User],
  migrations: ['src/database/migrations/*{.ts,.js}'],
  subscribers: [],
});
