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
module.exports.getEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const event = yield Event.query();
        const join = yield Event.query().withGraphFetched('user');
        console.log(join);
        console.log('woof');
        res.status(200).json(join);
    }
    catch (error) {
        console.log(error);
    }
});
// delete data event. 
module.exports.brewEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // rows: id, event_type, event_date, change_amount, inventory_id, user_id, brew_id
        const { event_type, event_date, change_amount, inventory_id, brew_id, purchase_id } = req.body;
        const newEvent = yield Event.query().insert({
            event_type, event_date, change_amount, inventory_id, brew_id, purchase_id
        });
        res.status(200).json(newEvent);
    }
    catch (error) {
        console.log(error);
    }
});
module.exports.purchaseEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { event_type, event_date, change_amount, inventory_id, purchase_id } = req.body;
        const newEvent = yield Event.query().insert({
            event_type, event_date, change_amount, inventory_id, purchase_id
        });
        console.log(newEvent);
        res.status(200).json(newEvent);
    }
    catch (error) {
        console.log(error);
    }
});
