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
    console.log(req.body)
    try {
        if (req.body.event.event_desc === '' ) {
            res.status(401).json({msg: 'empty reason for edit'})
        }  else {
            // id from middleware
            const user_id = res.locals.user.id
            // Finding Differences
            let diffArr = []
            for (let key in req.body.prev){
                if (req.body.prev[key] !== req.body.new[key] && key !== 'events') {
                    diffArr.push({key: key, prev: req.body.prev[key], new: req.body.new[key]})
                }
            }
            const diffDesc = diffArr.map((item: any) => `${item.key}: "${item.prev}" → "${item.new}" | `).join(', ')
            // body to post
            const newBody = 
            {
                event_amount: +req.body.new.inventory_amount - +req.body.prev.inventory_amount,
                event_type: '내용변경',
                event_date: req.body.event.today,
                event_desc: `변경이유: ${req.body.event.event_desc} | 변경사항: ${diffDesc}`,
                inventory_id: req.body.prev.id,
                user_id: user_id
            }
            const editEvent = await Event.query().insert(newBody)
            res.status(200).json(editEvent)

        }
  
    } catch (error) {
        console.log(error)
    }
}

export {};

