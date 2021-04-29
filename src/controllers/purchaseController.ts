const Brew = require('../db/models/brew.js')
const Event = require('../db/models/event.js')
const Inventory = require('../db/models/inventory.js')
const Purchase = require('../db/models/purchase.js')
const User = require('../db/models/user.js')


module.exports.purchasePost = async (req: any, res: any) => {

    try{

       // Create new Purchase
       const {purchase_date, purchase_description, purchase_amount, expiration_date, vendor} = req.body.purchase
       const newPurchase = await Purchase.query().insert({
        purchase_date, purchase_description, purchase_amount, expiration_date, vendor
        })
       .returning('*');

       await res.status(200).json('new Purchase');
    } catch(error) {
        console.log(error)
    }
};
module.exports.purchaseEvent = async (req: any, res: any) => {

    try{
        

    } catch(error) {
        console.log(error)
    }
}



// @PURCHASE
// Purchasing ingredients
// in 'purchase': purchase date, description, amount, date, vendor on purchase table;
// in 'event': event type -> purchase, event date, change amount(+), inventory id(either create a new entry, or use the existing one), user id(that's checked by jwt), purchase id
// in 'inventory': item name(if there is no existing item, create one), item type, item amount(+), expiriation date, item description



export {};

// SELECT SETVAL((SELECT PG_GET_SERIAL_SEQUENCE('"brew"', 'id')), (SELECT (MAX("id") + 1) FROM "brew"), FALSE);

// TEST POST
// {"purchase":{
//     "purchase_date":"2002-11-27",
//     "purchase_description": "this is our poastman purchase",
//     "purchase_amount": "this is our poastman purchase",
//     "expiration_date": "2033-10-21",
//     "vendor": "Ggeek Beer",
// },
// "event":[{
//     "event_type":"purchase",
//     "event_date":"2019-03-11",
//     "change_amount": 10,
//     "inventory_id":1,
//     "user_id": 3
// }],
// "inventory":{
//     "item_name":"new purchase",
//     "item_type": "hop",
//     "item_amount": "0",
//     "expiration_date": "2099-01-01",
//     "item_description":"this is our new item purchase"
// }
// }