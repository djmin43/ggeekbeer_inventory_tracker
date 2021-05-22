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
        if (req.body.event.event_desc === '') {
            res.status(401).json({ msg: 'empty reason for edit' });
        }
        else {
            // id from middleware
            const user_id = res.locals.user.id;
            // Finding Differences
            let diffArr = [];
            for (let key in req.body.prev) {
                if (req.body.prev[key] !== req.body.new[key] && key !== 'events') {
                    diffArr.push({ key: key, prev: req.body.prev[key], new: req.body.new[key] });
                }
            }
            const diffDesc = diffArr.map((item) => `${item.key}: "${item.prev}" → "${item.new}"`).join(', ');
            // body to post
            const newBody = {
                event_amount: +req.body.new.inventory_amount - +req.body.prev.inventory_amount,
                event_type: '내용변경',
                event_date: req.body.event.today,
                event_desc: `변경이유: ${req.body.event.event_desc} \n 변경사항: ${diffDesc}`,
                inventory_id: req.body.prev.id,
                user_id: user_id
            };
            const editEvent = yield Event.query().insert(newBody);
            res.status(200).json(editEvent);
        }
    }
    catch (error) {
        console.log(error);
    }
});
