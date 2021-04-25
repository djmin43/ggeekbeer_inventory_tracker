const Brew = require('../db/models/brew.js')
const Event = require('../db/models/event.js')
const Inventory = require('../db/models/inventory.js')
const Purchase = require('../db/models/purchase.js')
const User = require('../db/models/user.js')



module.exports.brew_post = async (req: any, res: any) => {
    try {
        // Brew Table Info: Insert all Info.
        const {brew_type, brew_date, brew_name, brew_description, user_id} = req.body
        // Event Table Info: Insert all info
        const {event_type, event_date, change_amount, inventory_id, brew_id} = req.body
        // Inventory Table Info: 'Change/update' only item amount.
        const {item_name, item_type, item_amount, expiration_date, item_description} = req.body

        const newBrew = await Brew.query().insert({
            brew_type, brew_date, brew_name, brew_description, user_id
        })
        .returning('*')

        const newEvent = await Event.query().insert({
            event_type, event_date, change_amount, inventory_id, 
            brew_id: newBrew.id
        })

        const newItem = await Inventory
        // Change/update item amount!

        res.status(200).json({msg: `${newBrew} has been posted!`})
    } catch(error) {
        console.log(error)
    }
};

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
