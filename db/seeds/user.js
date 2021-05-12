
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        { id: 1, 
          user_id: 'djmin43',
          password: '1234',
          user_name: '민동준'},

      ]);
    });
};