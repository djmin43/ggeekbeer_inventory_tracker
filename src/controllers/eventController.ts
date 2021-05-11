const Brew = require('../db/models/brew.js')
const Event = require('../db/models/event.js')
const Inventory = require('../db/models/inventory.js')
const Purchase = require('../db/models/purchase.js')
const User = require('../db/models/user.js')


module.exports.getEvent = async (req: any, res: any) => {
    try {
        const event = await Event.query();
        const join = await Event.query().findById(1).withGraphFetched('user')
        console.log(join)
        console.log('woof')
        res.status(200).json(join)
    } catch(error) {
        console.log(error)
    }
};

// delete data event. 

module.exports.brewEvent = async (req: any, res: any) => {
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

module.exports.purchaseEvent = async (req: any, res: any) => {
    try{
        const {event_type, event_date, change_amount, inventory_id, purchase_id} = req.body
        const newEvent = await Event.query().insert({
            event_type, event_date, change_amount, inventory_id, purchase_id
        })
        console.log(newEvent)
        res.status(200).json(newEvent)
    } catch(error) {
        console.log(error)
    }
}





export {};

