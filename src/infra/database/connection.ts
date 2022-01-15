import { createConnection } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { Author } from '../../domain/models/author.model';

export const Connection = () => createConnection({
  type: 'postgres',
  host: 'host.docker.internal',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'guide',
  entities: [Author],
} as PostgresConnectionOptions);
