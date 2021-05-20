const Event = require('../db/models/event.js')
const Inventory = require('../db/models/inventory.js')
const User = require('../db/models/user.js')


module.exports.getEvent = async (req: any, res: any) => {
    try {
        const event = await Event.query()
        .withGraphFetched('inventory(selectInventory)')
        .withGraphFetched('user(userName)')
        .modifiers({
            userName(builder: any) {
                builder.select('user_name')
            },
            selectInventory(builder: any) {
                builder.select('inventory_name', 'inventory_type')
            }
        })
        res.status(200).json(event)
    } catch(error) {
        console.log(error)
    }
};

module.exports.inventoryEdit = async (req: any, res: any) => {
    try {
        const user_id = res.locals.user.id

        
        let diff = []
        for (let key in req.body.prev){
            if (req.body.prev[key] !== req.body.new[key]) {
                diff.push({key: key, prev: req.body.prev[key], new: req.body.new[key]})
            }
        }
        const event_desc = ``

    } catch (error) {
        console.log(error)
    }
}

export {};

