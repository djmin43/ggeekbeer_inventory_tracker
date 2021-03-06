
exports.up = function(knex) {
    return knex.schema
    .createTable('event', (table) => {
        table.increments('id').primary();
        table.string('event_type').notNullable()
        table.integer('event_amount')
        table.date('event_date')
        table.string('event_desc')
        table.integer('inventory_id').references('id').inTable('inventory').notNullable();
        table.integer('user_id').references('id').inTable('user').notNullable();
        table.timestamps(true, true);
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('event')
};

