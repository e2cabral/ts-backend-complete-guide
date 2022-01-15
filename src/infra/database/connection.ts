import { createConnection } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const Connection = () => createConnection({
  type: 'postgres',
  host: 'host.docker.internal',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'guide',
  entities: [],
} as PostgresConnectionOptions);
