
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('event').del()
    .then(function () {
      // Inserts seed entries
      return knex('event').insert([
        { id: 1, 
          event_type: 'purchase',
          event_date: '2021-03-10',
          change_amount: 30,
          inventory_id: 2,
          user_id: 3,
          purchase_id: 1
        },
        { id: 2, 
          event_type: 'brew',
          event_date: '2021-01-10',
          change_amount: 50,
          inventory_id: 1,
          user_id: 2,
          brew_id: 3
        },
        { id: 3, 
          event_type: 'purchase',
          event_date: '2021-04-30',
          change_amount: 10,
          inventory_id: 3,
          user_id: 3,
          brew_id: 2,
          purchase_id: 1
        },
      ]);
    });
};
