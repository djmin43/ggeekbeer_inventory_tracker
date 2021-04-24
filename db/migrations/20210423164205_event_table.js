
exports.up = function(knex) {
    return knex.schema
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
// one to many relationship
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('event')


};

