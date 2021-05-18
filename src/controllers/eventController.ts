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
        const {id, inventory_name, inventory_type, inventory_amount, expiration_date, import_date, inventory_desc} = req.body.prev
        const {event_amount, inventory_id, event_type, event_date, event_desc} = req.body.edit
        const user_id = res.locals.user.id
        const newEvent = await Event.query()
        .insert({
        event_type: event_type,
        event_amount: event_amount,
        event_date: event_date,
        event_desc: `수정이유: ${event_desc}, 
        과거내역: 
        이름: ${inventory_name} 
        타입: ${inventory_type}, 
        양:${inventory_amount},  
        유통기한: ${expiration_date}, 
        입고날짜: ${import_date}, 
        재고설명: ${inventory_desc}`,
        inventory_id: inventory_id,
        user_id: user_id
        })
        console.log(newEvent)
        res.status(200).json({msg: 'event posted'})
    } catch (error) {
        console.log(error)
    }
}

export {};

