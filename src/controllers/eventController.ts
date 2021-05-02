const Brew = require('../db/models/brew.js')
const Event = require('../db/models/event.js')
const Inventory = require('../db/models/inventory.js')
const Purchase = require('../db/models/purchase.js')
const User = require('../db/models/user.js')


module.exports.getEvent = async (req: any, res: any) => {
    try {
        const event = await Event.query()
        res.status(200).json(event)
    } catch(error) {
        console.log(error)
    }
};


module.exports.newEvent = async (req: any, res: any) => {

    try{
        // rows: id, event_type, event_date, change_amount, inventory_id, user_id, brew_id
        const {event_type, event_date, change_amount, inventory_id, brew_id, purchase_id} = req.body
        const newEvent = await Event.query().insert({
            event_type, event_date, change_amount, inventory_id, brew_id, purchase_id
        })
        res.status(200).json(newEvent)
    } catch(error) {
        console.log(error)
    }
}


// GET Inventory table ('/info/purchase')


// List out information going to front-end -> Information used by user.

// Render information from database
// 1. Inventory data(GET)
// 2. Brew History(GET)
// 3. Purchase History(GET)
// 4. All Event History(GET/PATCH/DELETE as needed)




export {};

