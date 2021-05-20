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
        // const inventory = await Inventory.query()
        const inventory = yield Inventory.query()
            .withGraphFetched('events(selectEvent)')
            .modifiers({
            selectEvent(builder) {
                builder.select('event_type', 'event_amount', 'event_date', 'event_desc');
            }
        });
        res.status(200).json(inventory);
    }
    catch (error) {
        console.log(error);
    }
});
// Post New Inventory (Adding new inventory)
module.exports.inventoryPostNew = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { inventory_name, inventory_type, inventory_amount, expiration_date, import_date, inventory_desc, event_desc, event_type, today } = req.body;
        const user_id = res.locals.user.id;
        // Small validaiton to prevent empty request.
        if (inventory_name === '' || inventory_type === 'none') {
            res.status(401).json({ msg: 'invalid request' });
        }
        else {
            const newInventory = yield Inventory.query()
                .insert({
                inventory_name, inventory_type, inventory_amount, expiration_date, import_date, inventory_desc
            })
                .returning('*');
            // inventory_id foreign key 등록을 편하게 하기 위해서, api 콜 하나에 query 두개가 들어갑니다. 
            const newEvent = yield Event.query()
                .insert({
                event_type: event_type,
                event_amount: inventory_amount,
                event_date: today,
                event_desc: event_desc,
                inventory_id: newInventory.id,
                user_id: user_id
            });
            res.status(200).json({ msg: 'new inventory post successful!' });
        }
    }
    catch (error) {
        console.log(error);
    }
});
module.exports.inventoryUse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { inventory_id, inventory_amount, event_amount, event_desc, event_type, today } = req.body;
        const user_id = res.locals.user.id;
        const calculatedAmount = (yield inventory_amount) - event_amount;
        if (inventory_id === '') {
            res.status(400);
        }
        else {
            const updateInventory = yield Inventory.query()
                .findById(inventory_id)
                .patch({
                inventory_amount: calculatedAmount
            })
                .returning('*');
            const eventAmount = -event_amount;
            // inventory_id foreign key 등록을 편하게 하기 위해서, api 콜 하나에 query 두개가 들어갑니다. 
            const newEvent = yield Event.query()
                .insert({
                event_type: event_type,
                event_amount: eventAmount,
                event_date: today,
                event_desc: event_desc,
                inventory_id: inventory_id,
                user_id: user_id
            });
            res.status(200).json({ msg: 'updated!' });
        }
    }
    catch (error) {
        console.log(error);
    }
});
module.exports.inventoryEdit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, inventory_name, inventory_type, inventory_amount, expiration_date, import_date, inventory_desc } = req.body;
        if (id === 0) {
            res.status(401).json({ msg: 'invalid request' });
        }
        else {
            const updateInventory = yield Inventory.query()
                .findById(id)
                .patch({
                inventory_name, inventory_type, inventory_amount, expiration_date, import_date, inventory_desc
            });
            res.status(200).json({ msg: 'updated!' });
        }
    }
    catch (error) {
        console.log(error);
    }
});
