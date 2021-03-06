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
// GET Inventory table ('/info/inventory')
module.exports.inventoryGet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const inventory = yield Inventory.query();
        res.status(200).json(inventory);
    }
    catch (error) {
        console.log(error);
    }
});
// GET Inventory table ('/info/brew')
module.exports.brewGet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const brew = yield Brew.query();
        res.status(200).json(brew);
    }
    catch (error) {
        console.log(error);
    }
});
// GET Inventory table ('/info/purchase')
module.exports.purchaseGet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const purchase = yield Purchase.query();
        res.status(200).json(purchase);
    }
    catch (error) {
        console.log(error);
    }
});
