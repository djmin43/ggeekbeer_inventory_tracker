exports.up = function(knex) {
    return knex.schema
    .createTable('purchase', (table) => {
        table.increments();
        table.date('purchase_date').notNullable();
        table.string('purchase_description').notNullable();
        table.integer('purchase_amount').notNullable();
        table.date('expiration_date').notNullable();
        table.string('vendor').notNullable();
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('purchase')


};
