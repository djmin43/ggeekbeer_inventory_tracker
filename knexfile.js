const dotenv = require('dotenv');
dotenv.config({ path: './config/.env'});

// Update with your config settings.

module.exports = {

    development: {
      client: "pg",
      connection: 
      {
        host : process.env.DB_HOST,
        user : process.env.DB_USER,
        password : process.env.DB_PASSWORD,
        database : process.env.DB_NAME,
        rejectUnauthorized: true,
        ssl: true      
      },
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
  
    // 'postgresql://postgres:0000@/localhost:5432/postgres'
  };