
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('event').del()
    .then(function () {
      // Inserts seed entries
      return knex('event').insert([
        { id: 1,
          event_name: 'test event', 
          event_type: 'test',
          event_desc: 'this is sample seed data for event table',
          event_amount: 100,
          event_date: '2021-03-10',
          inventory_id: 1,
          user_id: 1,
        },

      ]);
    });
};

// knex seed:run --specific=[file_name.js]