const Brew = require('../db/models/brew.js')
const Event = require('../db/models/event.js')
const Inventory = require('../db/models/inventory.js')
const Purchase = require('../db/models/purchase.js')
const User = require('../db/models/user.js')


// GET Inventory table ('/info/inventory')
module.exports.inventoryGet = async (req: any, res: any) => {
    try {
        const inventory = await Inventory.query()
        res.status(200).json(inventory)
    } catch(error) {
        console.log(error)
    }
};

module.exports.inventoryAvailable = async (req: any, res: any) => {
    try {
        const availableInventory = await Inventory.query()
        .where('item_amount', '>', 0)
        res.status(200).json(availableInventory)
    } catch(error) {

    }
}

// GET Inventory table ('/info/brew')
module.exports.brewGet = async (req: any, res: any) => {
    try {
        const brew = await Brew.query()
        res.status(200).json(brew)
    } catch(error) {
        console.log(error)
    }
};

// GET Inventory table ('/info/purchase')
module.exports.purchaseGet = async (req: any, res: any) => {
    try {
        const purchase = await Purchase.query()
        res.status(200).json(purchase)
    } catch(error) {
        console.log(error)
    }
};

// List out information going to front-end -> Information used by user.

// Render information from database
// 1. Inventory data(GET)
// 2. Brew History(GET)
// 3. Purchase History(GET)
// 4. All Event History(GET/PATCH/DELETE as needed)




export {};

