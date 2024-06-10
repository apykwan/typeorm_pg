import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const createDatabase = async () => {
  const client = new Client({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  try {
    await client.connect();
    const res = await client.query(`SELECT 1 FROM pg_database WHERE datname = 'ormtest'`);
    if (res.rowCount === 0) {
      await client.query('CREATE DATABASE ormtest');
      console.log('Database "ormtest" created successfully.');
    } else {
      console.log('Database "ormtest" already exists.');
    }
  } catch (err) {
    console.error('Error creating database', err);
  } finally {
    await client.end();
  }
};

createDatabase();