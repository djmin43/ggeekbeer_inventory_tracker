const Brew = require('../db/models/brew.js')
const Event = require('../db/models/event.js')
const Inventory = require('../db/models/inventory.js')
const Purchase = require('../db/models/purchase.js')
const User = require('../db/models/user.js')


module.exports.purchaseGet = async (req: any, res: any) => {
    try {
        const purchase = await Purchase.query()
        res.status(200).json(purchase)
    } catch(error) {
        console.log(error)
    }
};

module.exports.purchasePost = async (req: any, res: any) => {
    try{
       // Create new Purchase
        const {purchase_date, purchase_description, purchase_amount, expiration_date, vendor, item_name, item_type, item_description} = req.body
        const newPurchase = await Purchase.query()
        .insert({
        purchase_date, purchase_description, purchase_amount, expiration_date, vendor
        })
        .returning('*')
       await res.status(200).json(newPurchase)
    } catch(error) {
        console.log(error)
    }
};
export {};
