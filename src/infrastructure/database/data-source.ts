import { DataSource, DataSourceOptions } from 'typeorm';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig({ path: '.env' });

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT, 10),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: ['dist/domain/entity/*.entity.js'],
  synchronize: false,
  migrations: ['dist/infrastructure/database/migrations/*.js'],
  migrationsTableName: 'migrations_typeorm',
  migrationsRun: true,
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;