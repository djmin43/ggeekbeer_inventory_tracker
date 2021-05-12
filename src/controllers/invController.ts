
const Inventory = require('../db/models/inventory.js')
const User = require('../db/models/user.js')


module.exports.inventoryGet = async (req: any, res: any) => {
    try {
        const inventory = await Inventory.query()
        res.status(200).json(inventory)
    } catch(error) {
        console.log(error)
    }
};



export {};
