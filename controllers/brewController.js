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
// Get BrewInfo DB
module.exports.brewGet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const brew = yield Brew.query();
        res.status(200).json(brew);
    }
    catch (error) {
        console.log(error);
    }
});
// Post a new Brew
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
module.exports.brewDelete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleteBrew = yield Brew.query().deleteById(req.params.id);
    }
    catch (error) {
        console.log(error);
    }
});
// SELECT SETVAL((SELECT PG_GET_SERIAL_SEQUENCE('"brew"', 'id')), (SELECT (MAX("id") + 1) FROM "brew"), FALSE);
