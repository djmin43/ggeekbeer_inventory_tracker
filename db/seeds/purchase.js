
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('purchase').del()
    .then(function () {
      // Inserts seed entries
      return knex('purchase').insert([
        { id: 1, 
          purchase_date: '2020-09-12',
          purchase_description: 'fresh galaxy hop by yakima',
          purchase_amount: 50,
          expiration_date: '2022-03-09',
          vendor: 'yakima'},
        { id: 2, 
          purchase_date: '2020-09-12',
          purchase_description: 'chocolate malt by germany',
          purchase_amount: 100,
          expiration_date: '2022-01-09',
          vendor: 'germany'},
        { id: 3, 
          purchase_date: '2020-10-12',
          purchase_description: 'weizen yeast by white lab',
          purchase_amount: 55,
          expiration_date: '2022-10-19',
          vendor: 'white lab'},

      ]);
    });
};