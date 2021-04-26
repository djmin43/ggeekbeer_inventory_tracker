const Brew = require('../db/models/brew.js')
const Event = require('../db/models/event.js')
const Inventory = require('../db/models/inventory.js')
const Purchase = require('../db/models/purchase.js')
const User = require('../db/models/user.js')



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
        // rows: id, event_type, event_date, change_amount, inventory_id, user_id, brew_id
        const eventArr = await req.body.event
        const addBrewId = await eventArr.map((i:any) => ({...i, brew_id: newBrew.id}))
        const newEvents = await Event.query().insertGraph(addBrewId)

        // Update inventory (calculated by front-end)
        // rows: id, item_amount(update the calculated value)
        const inventoryArr = await req.body.inventory
        await inventoryArr.forEach((i:any) => updateInventory(i.item_amount, i.inventory_id))

        await res.status(200).json('new Brew recorded!');

    } catch(error) {
        console.log(error)
    }
};

// Update Inventory Function
const updateInventory = async (amount: Number, id: Number ) => {
    await Inventory.query()
    .update({item_amount: amount})
    .where('id', id);
};

// I NEED UUID!!


// TEST POST
// {"brew":{
//     "brew_type":"production",
//     "brew_date":"2002-11-27",
//     "brew_name":"pislner batch ",
//     "brew_description": "this is our poastman batch",
//     "user_id": "3"
// },
// "event":[{
//     "event_type":"brew",
//     "event_date":"2021-03-11",
//     "change_amount": 9,
//     "inventory_id":1,
//     "user_id": 3
// },
// {
//     "event_type":"brew",
//     "event_date":"2021-03-11",
//     "change_amount": 15,
//     "inventory_id":2,
//     "user_id": 3
// }],
// "inventory":[{
//     "inventory_id": 1,
//     "item_amount": 39
// },
// {
//     "inventory_id": 2,
//     "item_amount": 99
// }]
// }


export {};


// SELECT SETVAL((SELECT PG_GET_SERIAL_SEQUENCE('"brew"', 'id')), (SELECT (MAX("id") + 1) FROM "brew"), FALSE);
