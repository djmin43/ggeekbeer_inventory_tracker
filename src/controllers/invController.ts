
const Inventory = require('../db/models/inventory.js')
const User = require('../db/models/user.js')
const Event = require('../db/models/event.js')

// Get Inventory Data
module.exports.inventoryGet = async (req: any, res: any) => {
    try {
        const inventory = await Inventory.query()
        res.status(200).json(inventory)
    } catch(error) {
        console.log(error)
    }
};

// Post New Inventory (Adding new inventory)
module.exports.inventoryPostNew = async (req: any, res: any) => {
    try {
        const {inventory_name, inventory_type, inventory_amount, expiration_date, import_date, inventory_desc, event_desc, user_id, event_type, today } = req.body
        const newInventory = await Inventory.query()
            .insert({
            inventory_name, inventory_type, inventory_amount, expiration_date, import_date, inventory_desc
            })
            .returning('*')
        const newEvent = await Event.query()
            .insert({
            event_type: event_type,
            event_amount: inventory_amount,
            event_date: today,
            event_desc: event_desc,
            inventory_id: newInventory.id,
            user_id: user_id
            })
        await console.log(newInventory)
        await console.log(newEvent)
        res.status(200).json(newInventory)
    } catch(error) {
        console.log(error)
    }
}

export {};
