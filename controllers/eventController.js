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
const Event = require('../db/models/event.js');
const Inventory = require('../db/models/inventory.js');
const User = require('../db/models/user.js');
module.exports.getEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const event = yield Event.query()
            .withGraphFetched('inventory(selectInventory)')
            .withGraphFetched('user(userName)')
            .modifiers({
            userName(builder) {
                builder.select('user_name');
            },
            selectInventory(builder) {
                builder.select('inventory_name', 'inventory_type');
            }
        });
        res.status(200).json(event);
    }
    catch (error) {
        console.log(error);
    }
});
module.exports.inventoryEdit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user_id = res.locals.user.id;
        let diff = [];
        for (let key in req.body.prev) {
            if (req.body.prev[key] !== req.body.new[key]) {
                diff.push({ key: key, prev: req.body.prev[key], new: req.body.new[key] });
            }
        }
        const event_desc = ``;
    }
    catch (error) {
        console.log(error);
    }
});
