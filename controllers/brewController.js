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
    try {
        const { brew_type, brew_date, brew_name, brew_description, user_id } = req.body;
        const newBrew = yield Brew.query().insert({
            brew_type, brew_date, brew_name, brew_description, user_id
        });
        yield res.status(200).json('new Brew recorded!');
    }
    catch (error) {
        console.log(error);
    }
});
module.exports.brewEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // rows: id, event_type, event_date, change_amount, inventory_id, user_id, brew_id
        const { event_type, event_date, change_amount, inventory_id, brew_id } = req.body;
        const brewEvent = { event_type, event_date, change_amount, inventory_id, brew_id };
        console.log(brewEvent);
        res.json(brewEvent);
    }
    catch (error) {
        console.log(error);
    }
});
// SELECT SETVAL((SELECT PG_GET_SERIAL_SEQUENCE('"brew"', 'id')), (SELECT (MAX("id") + 1) FROM "brew"), FALSE);
