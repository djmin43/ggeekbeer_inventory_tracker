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
module.exports.inventoryUsePatch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateInventory = yield Inventory.query()
            .findById(req.body.id)
            .patch({
            item_amount: req.body.item_amount
        });
        res.status(200).json(updateInventory);
    }
    catch (error) {
        console.timeLog(error);
    }
});
