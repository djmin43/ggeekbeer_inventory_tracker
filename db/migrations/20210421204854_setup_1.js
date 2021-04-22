const Knex = require('knex')


exports.up = async function (knex) {
    return knex.schema

    .createTable('inventory', (table) => {
        table.increments();
        table.string('item_name').notNullable();
        table.string('type').notNullable();
        table.string('provider').notNullable();
        table.integer('amount_kg').notNullable();
        table.date('expiration_date').notNullable();
        table.timestamps(true, true);
    })
    .createTable('user', (table) => {
        table.increments();
        table.string('user_id').notNullable();
        table.string('password').notNullable();
        table.string('user_name').notNullable();
        table.timestamps(true, true);
    })
    .createTable('event', (table) => {
        table.increments();
        // type: brew(-) or purchase(+)
        table.string('type').notNullable();
        table.date('date').notNullable();
        table.intger('change_amount').notNullable();
        table.integer('inventory_id').references('id').inTable('inventory');
        table.integer('user_id').references('id').inTable('user');
        table.integer('brew_id').references('id').inTable('brew');
        table.intger('purchase_id').references('id').inTable('purchase');
        table.timestamps(true, true);
    })
    .createTable('brew', (table) => {
        table.increments();
        // brew type: test or production
        table.string('type').notNullable();
        table.date('date').notNullable();
        table.string('name').notNullable();
        table.string('description').notNullable();
        table.integer('user_id').references('id').inTable('user');
        table.timestamps(true, true);
    })
    .createTable('purchase', (table) => {
        table.increments();
        table.date('date').notNullable();
        table.string('description').notNullable();
        table.integer('purchase_amount').notNullable();
        table.string('vendor').notNullable();
        table.date('expiration_date').notNullable();
        table.timestamps(true, true);
    })
};


exports.down = async function (knex) {
    return knex.schema
    .dropTableIfExists('inventory')
    .dropTableIfExists('brewer')
    .dropTableIfExists('event')
};

