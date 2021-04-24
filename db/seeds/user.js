
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { id: 1, 
          user_id: 'hexaprism',
          password: '1234',
          user_name: '한종윤'},
        { id: 2, 
          user_id: 'umyoung',
          password: '1111',
          user_name: '엄우영'},
        { id: 3, 
          user_id: 'wjlee2603',
          password: '0000',
          user_name: '이웅재'},
      ]);
    });
};

