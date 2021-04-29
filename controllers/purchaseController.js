"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Brew = require('../db/models/brew.js');
const Event = require('../db/models/event.js');
const Inventory = require('../db/models/inventory.js');
const Purchase = require('../db/models/purchase.js');
const User = require('../db/models/user.js');
module.exports.purchasePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Create new Purchase
        const { purchase_date, purchase_description, purchase_amount, expiration_date, vendor } = req.body.purchase;
        const newPurchase = yield Purchase.query().insert({
            purchase_date, purchase_description, purchase_amount, expiration_date, vendor
        })
            .returning('*');
        // Add an array of new events.g
        // rows: id, event_type, event_date, change_amount, inventory_id, user_id, purchase_id
        const eventArr = yield req.body.event;
        const addPurchaseId = yield eventArr.map((item) => (Object.assign(Object.assign({}, item), { purchase_id: newPurchase.id })));
        const newEvents = yield Event.query().insertGraph(addPurchaseId);
        // Create new inventory (calculated by front-end)
        // rows: id, purchase_date, purchase_description, expiration_date, vendor, item_amount(update the calculated value)
        const { item_name, item_type, item_amount, item_description } = req.body.inventory;
        const newInventory = yield Inventory.query().insert({
            item_name, item_type, item_amount, expiration_date, item_description
        });
        yield res.status(200).json(newInventory);
    }
    catch (error) {
        console.log(error);
    }
});
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
