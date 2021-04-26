const Brew = require('../db/models/brew.js')
const Event = require('../db/models/event.js')
const Inventory = require('../db/models/inventory.js')
const Purchase = require('../db/models/purchase.js')
const User = require('../db/models/user.js')


module.exports.purchase_post = async (req: any, res: any) => {
    try{

       // Create new Purchase
       const {purchase_date, purchase_description, purchase_amount, expiration_date, vendor} = req.body.purchase
       const newPurchase = await Purchase.query().insert({
        purchase_date, purchase_description, purchase_amount, expiration_date, vendor
        })
       .returning('*');

       // Add an array of new events.g
       // rows: id, event_type, event_date, change_amount, inventory_id, user_id, purchase_id
       const eventArr = await req.body.event
       const addPurchaseId = await eventArr.map((i:any) => ({...i, purchase_id: newPurchase.id}))
       const newEvents = await Event.query().insertGraph(addPurchaseId)

       // Create new inventory (calculated by front-end)
       // rows: id, purchase_date, purchase_description, expiration_date, vendor, item_amount(update the calculated value)
       const {item_name, item_type, item_amount, item_description} = req.body.inventory
        const newInventory = await Inventory.query().insert({
            item_name, item_type, item_amount, expiration_date, item_description
        });

       await res.status(200).json('new purchase order recorded!');
    } catch(error) {
        console.log(error)
    }
};



// @PURCHASE
// Purchasing ingredients
// in 'purchase': purchase date, description, amount, date, vendor on purchase table;
// in 'event': event type -> purchase, event date, change amount(+), inventory id(either create a new entry, or use the existing one), user id(that's checked by jwt), purchase id
// in 'inventory': item name(if there is no existing item, create one), item type, item amount(+), expiriation date, item description



export {};

// SELECT SETVAL((SELECT PG_GET_SERIAL_SEQUENCE('"brew"', 'id')), (SELECT (MAX("id") + 1) FROM "brew"), FALSE);
