const dotenv = require('dotenv');
dotenv.config({ path: '../config/.env'});

// Update with your config settings.

module.exports = {

    development: {
      client: "postgresql",
      connection: {
        database: "ggeek_inventory",
        user: `${process.env.DB_USER}`,
        password: `${process.env.DB_PASSWORD}`
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
      // client: "",
      // connection: {
      //   database: "0",
      //   user: "0",
      //   password: "0"
      // },
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