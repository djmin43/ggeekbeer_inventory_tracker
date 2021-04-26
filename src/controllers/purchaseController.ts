const Brew = require('../db/models/brew.js')
const Event = require('../db/models/event.js')
const Inventory = require('../db/models/inventory.js')
const Purchase = require('../db/models/purchase.js')
const User = require('../db/models/user.js')


module.exports.purchase_post = async (req: any, res: any) => {
    try{

        const {purchase_date, purchase_description, purchase_amount, expiration_date} = req.body.purchase

       // Create new Brew
       const newPurchase = await Purchase.query().insert({
        purchase_date, purchase_description, purchase_amount, expiration_date
        })
       .returning('*');

       // Add an array of new events.
       // rows: id, event_type, event_date, change_amount, inventory_id, user_id, purchase_id
       const eventArr = await req.body.event
       const addPurchaseId = await eventArr.map((i:any) => ({...i, purchase_id: newPurchase.id}))
       const newEvents = await Event.query().insertGraph(addPurchaseId)

       // Update inventory (calculated by front-end)
       // rows: id, item_amount(update the calculated value)
       const inventoryArr = await req.body.inventory
       await inventoryArr.forEach((i:any) => updateInventory(i.item_amount, i.inventory_id))

       await res.status(200).json('hello');
    } catch(error) {
        console.log(error)
    }


};

// Update Inventory Function
const updateInventory = async (amount: Number, id: Number ) => {
    await Inventory.query()
    .update({item_amount: amount})
    .where('id', id);
    console.log('change!')
};

// @PURCHASE
// Purchasing ingredients
// in 'purchase': purchase date, description, amount, date, vendor on purchase table;
// in 'event': event type -> purchase, event date, change amount(+), inventory id(either create a new entry, or use the existing one), user id(that's checked by jwt), purchase id
// in 'inventory': item name(if there is no existing item, create one), item type, item amount(+), expiriation date, item description



export {};
