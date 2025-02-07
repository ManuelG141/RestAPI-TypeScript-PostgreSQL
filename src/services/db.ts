import pg from 'pg'

export const pool = new pg.Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_ENDPOINT,
  port: process.env.DB_PORT as unknown as number,
  database: process.env.DB
})
