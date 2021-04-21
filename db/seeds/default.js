const Knext = require('knex')


exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex.raw('TRUNCATE TABLE "inventory" CASCADE');
    await knex.raw('TRUNCATE TABLE "brewer" CASCADE');
    await knex.raw('TRUNCATE TABLE "event" CASCADE');

    // Inserts seed entries
    await knex("inventory").insert([
        { 
        id: 1, 
        item_name: "sample_hop",
        type: "hop",
        amount_kg: 99,
        received_date: "2021-04-21",
        expiration_date: "2022-12-25",
        provider: "Yakima, California, USA"
        },
        { 
        id: 2, 
        item_name: "sample_malt",
        type: "malt",
        amount_kg: 5,
        received_date: "2021-04-21",
        expiration_date: "2022-12-25",
        provider: "Berlin, Germany"
        },
    ]);

    await knex("brewer").insert([
        { 
        id: 1, 
        brewer_id: "sample11",
        password: "12345678",
        brewer_name: "김꿀꺽"
        },
    ]);


    await knex("event").insert([
        { 
        id: 1, 
        event_type: "brew",
        event_date: "2021-06-21",
        description: "sample data - brewing sample beer. ex: using 3 kg of fresh hops, 5kg of black malt, and 10g of lager yeast",
        inventory_id: "1",
        brewer_id: "1"
        },
        { 
        id: 2, 
        event_type: "brew",
        event_date: "2021-06-21",
        description: "sample data - brewing sample beer. ex: using 3 kg of fresh hops, 5kg of black malt, and 10g of lager yeast",
        inventory_id: "2",
        brewer_id: "1"
        },
    ]);

};

