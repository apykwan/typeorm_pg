import { DataSource } from 'typeorm';
import dotenv from 'dotenv';

import { User } from '../entities/User.entity';
import { Profile } from '../entities/Profile.entity';
import { Todo } from '../entities/Todo.entity';

dotenv.config();

const dataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: false,
  synchronize: true,
  entities: [User, Profile, Todo]
});

export default dataSource;