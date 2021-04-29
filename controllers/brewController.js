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
module.exports.brewPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Update Inventory Function
    const updateInventory = (amount, id) => __awaiter(void 0, void 0, void 0, function* () {
        yield Inventory.query()
            .update({ item_amount: amount })
            .where('id', id);
    });
    try {
        // Brew Table Info: Insert all Info.
        const { brew_type, brew_date, brew_name, brew_description, user_id } = req.body.brew;
        // Create new Brew
        const newBrew = yield Brew.query().insert({
            brew_type, brew_date, brew_name, brew_description, user_id
        })
            .returning('*');
        // Add an array of new events.
        // rows: id, event_type, event_date, change_amount, inventory_id, user_id, brew_id
        const eventArr = yield req.body.event;
        const addBrewId = yield eventArr.map((item) => (Object.assign(Object.assign({}, item), { brew_id: newBrew.id })));
        const newEvents = yield Event.query().insertGraph(addBrewId);
        // Update inventory (calculated by front-end)
        // rows: id, item_amount(update the calculated value)
        const inventoryArr = yield req.body.inventory;
        yield inventoryArr.forEach((i) => updateInventory(i.item_amount, i.inventory_id));
        yield res.status(200).json('new Brew recorded!');
    }
    catch (error) {
        console.log(error);
    }
});
// SELECT SETVAL((SELECT PG_GET_SERIAL_SEQUENCE('"brew"', 'id')), (SELECT (MAX("id") + 1) FROM "brew"), FALSE);
