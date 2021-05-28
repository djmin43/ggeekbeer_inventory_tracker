const dotenv = require('dotenv');
dotenv.config({ path: './config/.env'});

// Update with your config settings.

module.exports = {

    development: {
      client:  'pg',
      connection: {
        host : process.env.DB_HOST_DEV,
        user : process.env.DB_USER_DEV,
        password : process.env.DB_PASSWORD_DEV,
        database : process.env.DB_NAME_DEV,
      },
      ssl: { rejectUnauthorized: false },
      pool: {
        min: 1,
        max: 10
      },
      migrations: {
        tableName: "knex_migrations",
        directory: './db/migrations',
      },
      seeds: {
        directory: './seeds',
      },
    },
    production: {
      client:  'pg',
      connection: {
        host : process.env.DB_HOST,
        user : process.env.DB_USER,
        password : process.env.DB_PASSWORD,
        database : process.env.DB_NAME,
      },
      ssl: { rejectUnauthorized: false },
      pool: {
        min: 1,
        max: 10
      },
      migrations: {
        tableName: "knex_migrations",
        directory: './db/migrations',
      },
      seeds: {
        directory: './seeds',
      },
    },
  
  };

  // heroku pg:psql postgresql-animated-19971 --app ggeekinventory