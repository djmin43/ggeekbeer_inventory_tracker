const dotenv = require('dotenv');
dotenv.config({ path: '../config/.env'});

// Update with your config settings.

module.exports = {

    development: {
      client: "postgres",

      connection: {
        host : 'ec2-54-196-33-23.compute-1.amazonaws.com',
        user : 'pnuiheowpoilqy',
        password : '003d7450f34075108911315c3b6418dc33ab4f628987db072a26b69a4225e66e',
        database : 'dbi4pb0jn3ccvu',
        ssl: { rejectUnauthorized: false }
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