"use strict";
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
            directory: '../src/db/migrations',
            extension: 'ts'
        },
        seeds: {
            directory: '../src/db/seeds',
        },
    },
    // production: {
    //   client: "postgresql",
    //   connection: {
    //     database: "my_db",
    //     user: "username",
    //     password: "password"
    //   },
    //   pool: {
    //     min: 2,
    //     max: 10
    //   },
    //   migrations: {
    //     tableName: "knex_migrations",
    //     directory:'./migrations'
    //   },
    //   seeds: {
    //     directory: './seeds'
    //   }
    // }
};
