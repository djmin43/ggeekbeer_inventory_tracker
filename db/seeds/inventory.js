
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('inventory').del()
    .then(function () {
      // Inserts seed entries
      return knex('inventory').insert([
        { id: 1, 
          inventory_name: 'test name 1',
          inventory_type: 'test type 1',
          inventory_amount: 99,
          expiration_date: '2021-05-05',
          import_date: '2021-01-01',
          inventory_description: 'this is a sample seend data.'
        }

      ]);
    });
};


// COMMAND: $ knex seed:run
