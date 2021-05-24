const dotenv = require('dotenv');
dotenv.config({ path: '../config/.env'});

// Update with your config settings.

module.exports = {

    development: {
      client: "postgresql",
      connection: {
        database: "ggeek_inventory_tracker",
        user: "postgres",
        password: `09170917`
        
      },
      pool: {
        min: 3,
        max: 10
      },
      migrations: {
        tableName: "knex_migrations",
        directory: './migrations',
      },
      seeds: {
        directory: './seeds',
      },
    },
  
    production: {
      client: "postgresql",
      connection: {
        database: "my_db",
        user: "jay",
        password: "process.env.DB_PASSWORD"
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: "knex_migrations",
        directory:'./migrations'
      },
      seeds: {
        directory: './seeds'
      }
    }

  };