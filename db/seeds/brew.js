
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('brew').del()
    .then(function () {
      // Inserts seed entries
      return knex('brew').insert([
        {id: 1, 
        brew_type: 'production batch(seed)', 
        brew_date: '2021-04-11(seed)',
        brew_name: 'american pilsner(seed)',
        brew_description: 'sample seed data',
        user_id: 1
      },
        {id: 2, 
        brew_type: 'production batch(seed)', 
        brew_date: '2021-04-11(seed)',
        brew_name: 'west coast ipa(seed)',
        brew_description: 'sample seed data2',
        user_id: 1
      },
        {id: 3, 
        brew_type: 'test batch(seed)', 
        brew_date: '2021-04-22(seed)',
        brew_name: 'new england ipa(seed)',
        brew_description: 'sample seed data3',
        user_id: 2
      },

      ]);
    });
};
