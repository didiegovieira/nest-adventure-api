import { DataSource, DataSourceOptions } from 'typeorm';
import { config as dotenvConfig } from 'dotenv';
import { Character } from 'src/domain/entity/character.entity';
import { Item } from 'src/domain/entity/item.entity';
import { Quest } from 'src/domain/entity/quest.entity';

dotenvConfig({ path: '.env' });

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT, 10),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [Character, Item, Quest],
  synchronize: false,
  migrations: ['dist/infrastructure/database/migrations/*.js'],
  migrationsTableName: 'migrations_typeorm',
  migrationsRun: true,
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;