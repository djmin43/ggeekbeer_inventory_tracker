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
module.exports.purchaseGet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const purchase = yield Purchase.query();
        res.status(200).json(purchase);
    }
    catch (error) {
        console.log(error);
    }
});
module.exports.purchasePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Create new Purchase
        const { purchase_date, purchase_description, purchase_amount, expiration_date, vendor } = req.body.purchase;
        const newPurchase = yield Purchase.query().insert({
            purchase_date, purchase_description, purchase_amount, expiration_date, vendor
        })
            .returning('*');
        yield res.status(200).json('new Purchase');
    }
    catch (error) {
        console.log(error);
    }
});
