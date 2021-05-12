
exports.up = function(knex) {
    return knex.schema
    .createTable('event', (table) => {
        table.increments('id').primary();
        table.string('event_name').notNullable()
        table.string('event_type').notNullable()
        table.string('event_desc')
        table.integer('event_amount')
        table.date('event_date')
        table.integer('inventory_id').references('id').inTable('inventory');
        table.integer('user_id').references('id').inTable('user');
        table.timestamps(true, true);
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('event')
};

