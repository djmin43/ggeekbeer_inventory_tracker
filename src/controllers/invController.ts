const Brew = require('../db/models/brew.js')
const Event = require('../db/models/event.js')
const Inventory = require('../db/models/inventory.js')
const Purchase = require('../db/models/purchase.js')
const User = require('../db/models/user.js')


module.exports.inventoryGet = async (req: any, res: any) => {
    try {
        const inventory = await Inventory.query()
        res.status(200).json(inventory)
    } catch(error) {
        console.log(error)
    }
};

module.exports.inventoryPatch = async (req: any, res: any) => {
    try{
        const updateInventory = await Inventory.query()
        .findById(req.body.id)
        .patch({
            item_amount: req.body.item_amount
        })
        res.status(200).json(updateInventory)
    } catch(error) {
        console.timeLog(error)
    }
}

module.exports.inventoryNew = async (req: any, res: any) => {
    try{
        const { new_amount, expiration_date, item_name, item_type, item_description} = req.body

        const newPurchaseInventory = await Inventory.query().insert({
            item_name, item_type, item_description, expiration_date, item_amount: new_amount
        })
       await res.status(200).json(req.body)
    } catch(error) {
        console.log(error)
    }
};





// module.exports.invAvailable = async (req: any, res: any) => {
//     try {
//         const availableInventory = await Inventory.query()
//         .where('item_amount', '>', 0)
//         res.status(200).json(availableInventory)
//     } catch(error) {
//     }
// }

export {};
