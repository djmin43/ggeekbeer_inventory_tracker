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
module.exports.brew_post = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Brew Table Info: Insert all Info.
        const { brew_type, brew_date, brew_name, brew_description, user_id } = req.body;
        // Event Table Info: Insert all info
        const { event_type, event_date, change_amount, inventory_id, brew_id } = req.body;
        // Inventory Table Info: 'Change/update' only item amount.
        const { item_name, item_type, item_amount, expiration_date, item_description } = req.body;
        const newBrew = yield Brew.query().insert({
            brew_type, brew_date, brew_name, brew_description, user_id
        })
            .returning('*');
        const newEvent = yield Event.query().insert({
            event_type, event_date, change_amount, inventory_id,
            brew_id: newBrew.id
        });
        const newItem = yield Inventory;
        // Change/update item amount!
        res.status(200).json({ msg: `${newBrew} has been posted!` });
    }
    catch (error) {
        console.log(error);
    }
});
