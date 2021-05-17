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
const bcrypt = require('bcryptjs');
module.exports.signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, userName, password } = req.body;
    try {
        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(password, salt, function (err, hash) {
                return __awaiter(this, void 0, void 0, function* () {
                    const singUp = yield User.query().insert({
                        user_name: userName,
                        user_id: userId,
                        password: hash
                    });
                });
            });
        });
        res.status(200).json({ msg: 'new user has been created' });
    }
    catch (error) {
        console.log(error);
    }
});
module.exports.logIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, password } = req.body;
    try {
        const user = yield User.query().select('user_id', 'password').where('user_id', userId);
        const auth = yield bcrypt.compare(password, user[0].password);
        res.json(auth);
        // bcrypt.compare();
    }
    catch (error) {
        console.log(error);
    }
});
