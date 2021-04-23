
exports.up = function(knex) {
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
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('inventory')


};
