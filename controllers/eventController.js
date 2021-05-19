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
        const { id, inventory_name, inventory_type, inventory_amount, expiration_date, import_date, inventory_desc } = req.body.prev;
        const { event_amount, inventory_id, event_type, event_date, event_desc } = req.body.edit;
        const user_id = res.locals.user.id;
        if (event_desc === '') {
            res.status(400).json({ msg: 'bad request' });
        }
        else {
            const newEvent = yield Event.query()
                .insert({
                event_type: event_type,
                event_amount: event_amount,
                event_date: event_date,
                event_desc: `수정이유: ${event_desc}, 
            과거내역: 
            이름: ${inventory_name} 
            타입: ${inventory_type}, 
            양:${inventory_amount},  
            유통기한: ${expiration_date}, 
            입고날짜: ${import_date}, 
            재고설명: ${inventory_desc}`,
                inventory_id: inventory_id,
                user_id: user_id
            });
            res.status(200).json({ msg: 'event posted' });
        }
    }
    catch (error) {
        console.log(error);
    }
});
