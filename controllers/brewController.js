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
// Update Inventory Function
const updateInventory = (amount, id) => __awaiter(void 0, void 0, void 0, function* () {
    yield Inventory.query()
        .update({ item_amount: amount })
        .where('id', id);
    console.log('change!');
});
module.exports.brew_post = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Brew Table Info: Insert all Info.
        const { brew_type, brew_date, brew_name, brew_description, user_id } = req.body.brew;
        // Create new Brew
        const newBrew = yield Brew.query().insert({
            brew_type, brew_date, brew_name, brew_description, user_id
        })
            .returning('*');
        // Add an array of new events.
        const eventArr = yield req.body.event;
        const addBrewId = yield eventArr.map((i) => (Object.assign(Object.assign({}, i), { brew_id: newBrew.id })));
        const newEvents = yield Event.query().insertGraph(addBrewId);
        // Update inventory (calculated by front-end).
        const inventoryArr = yield req.body.inventory;
        yield inventoryArr.forEach((i) => updateInventory(i.item_amount, i.inventory_id));
        yield res.json('hello');
    }
    catch (error) {
        console.log(error);
    }
});
// SELECT SETVAL((SELECT PG_GET_SERIAL_SEQUENCE('"brew"', 'id')), (SELECT (MAX("id") + 1) FROM "brew"), FALSE);
