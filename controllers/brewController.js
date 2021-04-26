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
        const { brew_type, brew_date, brew_name, brew_description, user_id } = req.body.brew;
        // const brew = {brew_type, brew_date, brew_name, brew_description, user_id}
        // const {item_id, item_name, item_amount} = req.body
        // Inventory Table Info: 'Change/update' only item amount.
        // const {item_name, item_type, item_amount, expiration_date, item_description} = req.body.inventory
        const newBrew = yield Brew.query().insert({
            brew_type, brew_date, brew_name, brew_description, user_id
        })
            .returning('*');
        const eventArr = yield req.body.event;
        const addBrewId = yield eventArr.map((i) => (Object.assign(Object.assign({}, i), { brew_id: newBrew.id })));
        const newEvents = yield Event.query().insertGraph(addBrewId);
        res.json(newEvents);
        // Change/update item amount!
        // console.log(newBrew.id)
        // res.status(200).json({msg: `${newBrew} has been posted!`})
    }
    catch (error) {
        console.log(error);
    }
});
// SELECT SETVAL((SELECT PG_GET_SERIAL_SEQUENCE('"brew"', 'id')), (SELECT (MAX("id") + 1) FROM "brew"), FALSE);
