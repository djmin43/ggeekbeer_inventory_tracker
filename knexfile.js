const dotenv = require('dotenv');
dotenv.config({ path: '../config/.env'});

// Update with your config settings.

module.exports = {

    development: {
      client: "postgres",

      connection: {
        host : 'ec2-52-0-114-209.compute-1.amazonaws.com',
        user : 'arzmzrgrvfribo',
        password : 'ddc0eb82f14730b3709506a6e94f12802e8ab14e0a3da1b2fcdb708549c393ca',
        database : 'dfbpcu73934eji',
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