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
const Inventory = require('../db/models/inventory.js');
const User = require('../db/models/user.js');
const Event = require('../db/models/event.js');
// Get Inventory Data
module.exports.inventoryGet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const inventory = yield Inventory.query();
        res.status(200).json(inventory);
    }
    catch (error) {
        console.log(error);
    }
});
// Post New Inventory (Adding new inventory)
module.exports.inventoryPostNew = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { inventory_name, inventory_type, inventory_amount, expiration_date, import_date, inventory_desc, event_desc, user_id, event_type, today } = req.body;
        const newInventory = yield Inventory.query()
            .insert({
            inventory_name, inventory_type, inventory_amount, expiration_date, import_date, inventory_desc
        })
            .returning('*');
        const newEvent = yield Event.query()
            .insert({
            event_type: event_type,
            event_amount: inventory_amount,
            event_date: today,
            event_desc: event_desc,
            inventory_id: newInventory.id,
            user_id: user_id
        });
        yield console.log(newInventory);
        yield console.log(newEvent);
        res.status(200).json(newInventory);
    }
    catch (error) {
        console.log(error);
    }
});
