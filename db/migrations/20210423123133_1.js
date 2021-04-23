const Knex = require('knex')


exports.up = async function (knex) {
    return knex.schema

    .createTable('inventory', (table) => {
        table.increments();
        table.string('item_name').notNullable();
        table.string('item_type').notNullable();
        table.integer('item_amount').notNullable();
        table.date('expiration_date').notNullable();
        table.string('item_description').notNullable();
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
        table.string('event_type').notNullable();
        table.date('event_date').notNullable();
        table.integer('change_amount').notNullable();
        table.integer('inventory_id').references('id').inTable('inventory');
        table.integer('user_id').references('id').inTable('user');
        table.integer('brew_id').references('id').inTable('brew');
        table.integer('purchase_id').references('id').inTable('purchase');
        table.timestamps(true, true);
    })
    .createTable('brew', (table) => {
        table.increments();
        // brew type: test or production
        table.string('brew_type').notNullable();
        table.date('brew_date').notNullable();
        table.string('brew_name').notNullable();
        table.string('brew_description').notNullable();
        table.integer('user_id').references('id').inTable('user');
        table.timestamps(true, true);
    })
    .createTable('purchase', (table) => {
        table.increments();
        table.date('purchase_date').notNullable();
        table.string('purchase_description').notNullable();
        table.integer('purchase_amount').notNullable();
        table.date('expiration_date').notNullable();
        table.string('vendor').notNullable();
        table.timestamps(true, true);
    })
};


exports.down = async function (knex) {
    return knex.schema
    .dropTableIfExists('inventory')
    .dropTableIfExists('user')
    .dropTableIfExists('event')
    .dropTableIfExists('brew')
    .dropTableIfExists('purchase')
};

