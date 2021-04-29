const Brew = require('../db/models/brew.js')
const Event = require('../db/models/event.js')
const Inventory = require('../db/models/inventory.js')
const Purchase = require('../db/models/purchase.js')
const User = require('../db/models/user.js')



module.exports.invPost = async (req: any, res: any) => {

    try {
        const addInventory = await req.body

    } catch(error) {
        console.log(error)
    }
}


module.exports.invUpdate = async (req: any, res: any) => {

    try {
        const updateInventory = await req.body

    } catch(error) {
        console.log(error)
    }
}


export {};
