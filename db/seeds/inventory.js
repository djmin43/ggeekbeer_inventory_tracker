
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('inventory').del()
    .then(function () {
      // Inserts seed entries
      return knex('inventory').insert([
        { id: 1, 
          item_name: 'galaxy hop',
          item_type: 'hop',
          item_amount: 15,
          expiration_date: '2022-10-30',
          item_description: 'gold hop test'},
        { id: 2, 
          item_name: 'chocolate malt',
          item_type: 'malt',
          item_amount: 30,
          expiration_date: '2023-10-30',
          item_description: 'chocolate malt for stout'},
        { id: 3, 
          item_name: 'weizen yeast',
          item_type: 'yeast',
          item_amount: 100,
          expiration_date: '2024-10-30',
          item_description: 'yeast for weizen'}
      ]);
    });
};
