
exports.up = function(knex) {
    return knex.schema
    .createTable('brew', (table) => {
        table.increments();
        // brew type: test or production
        table.string('brew_type').notNullable();
        table.date('brew_date').notNullable();
        table.string('brew_name').notNullable();
        table.string('brew_description').notNullable();
        table.integer('user_id').references('id').inTable('user');
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('brew')


};
