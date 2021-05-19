
exports.up = function(knex) {
    return knex.schema
    .createTable('inventory', (table) => {
        table.increments('id').primary();
        table.string('inventory_name').notNullable();
        table.string('inventory_type').notNullable();
        table.integer('inventory_amount').notNullable()
        table.date('expiration_date')
        table.date('import_date')
        table.string('inventory_desc')
        table.timestamps(true, true);
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('inventory')
};

// knex migrate:latest
// knex migrate:rollback --all
