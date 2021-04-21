const Knex = require('knex')


exports.up = async function (knex) {
    return knex.schema

    .createTable('inventory', (table) => {
        table.increments();
        table.string('item_name').notNullable();
        table.string('type').notNullable();
        table.integer('amount_kg').notNullable();
        table.date('received_date').notNullable();
        table.date('expiration_date').notNullable();
        table.string('provider').notNullable();
        table.timestamps(true, true);
    })
    .createTable('brewer', (table) => {
        table.increments();
        table.string('brewer_id').notNullable();
        table.string('password').notNullable();
        table.string('brewer_name').notNullable();
        table.timestamps(true, true);
    })
    .createTable('event', (table) => {
        table.increments();
        table.string('event_type').notNullable();
        table.date('event_date').notNullable();
        table.string('description').notNullable();
        table.integer('inventory_id').references('id').inTable('inventory');
        table.integer('brewer_id').references('id').inTable('brewer');
        table.timestamps(true, true);
    })
};


exports.down = async function (knex) {
    return knex.schema
    .dropTableIfExists('inventory')
    .dropTableIfExists('brewer')
    .dropTableIfExists('event')
};

