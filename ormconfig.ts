import * as dotenv from 'dotenv';

dotenv.config();

export default {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: false,
  entities: ['./src/entities/*.ts'],
  migrations: ['./src/database/migrations/*.ts'],
  cli: {
    entitiesDir: './src/entities',
    migrationsDir: './src/database/migrations',
  },
};
