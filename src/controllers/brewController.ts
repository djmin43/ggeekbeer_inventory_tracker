const Brew = require('../db/models/brew.js')
const Event = require('../db/models/event.js')
const Inventory = require('../db/models/inventory.js')
const Purchase = require('../db/models/purchase.js')
const User = require('../db/models/user.js')

// Update Inventory Function
const updateInventory = async (amount: any, id: any ) => {
    await Inventory.query()
    .update({item_amount: amount})
    .where('id', id);
    console.log('change!')
}

module.exports.brew_post = async (req: any, res: any) => {
    try {
        // Brew Table Info: Insert all Info.
        const {brew_type, brew_date, brew_name, brew_description, user_id} = req.body.brew

        // Create new Brew
        const newBrew = await Brew.query().insert({
            brew_type, brew_date, brew_name, brew_description, user_id
        })
        .returning('*');

        // Add an array of new events.
        const eventArr = await req.body.event
        const addBrewId = await eventArr.map((i:any) => ({...i, brew_id: newBrew.id}))
        const newEvents = await Event.query().insertGraph(addBrewId)

        // Update inventory (calculated by front-end).
        const inventoryArr = await req.body.inventory
        await inventoryArr.forEach((i:any) => updateInventory(i.item_amount, i.inventory_id))

        await res.json('hello')



    


    } catch(error) {
        console.log(error)
    }
};


// There will be n number of item changes -> per event.


// I NEED UUID!!


// inventory
// { id: 1, 
//     item_name: 'galaxy hop',
//     item_type: 'hop',
//     item_amount: 15,
//     expiration_date: '2022-10-30',
//     item_description: 'gold hop test'},

// event
// { id: 1, 
//     event_type: 'purchase',
//     event_date: '2021-03-10',
//     change_amount: 30,
//     inventory_id: 2,
//     user_id: 3,
//     purchase_id: 1
//   }


// @BREWING
// Brewing
// in 'brew': brew type, date, name, description, and (user_id from user table)
// in 'event' (loop through per inventory item): event type -> brew, event date, change amount(-), inventory id(findby id), brew id
// in 'inventory'(loop through per inventory item used): PATCH item name (-), item type, item amount(-) 


export {};


// SELECT SETVAL((SELECT PG_GET_SERIAL_SEQUENCE('"brew"', 'id')), (SELECT (MAX("id") + 1) FROM "brew"), FALSE);
