
exports.up = function(knex) {
    return knex.schema
    .createTable('user', (table) => {
        table.increments('id').primary();
        table.string('user_id').notNullable();
        table.string('password').notNullable();
        table.string('user_name').notNullable();
        table.timestamps(true, true);
    })

};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('user')


};
