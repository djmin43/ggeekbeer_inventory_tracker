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
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: '../config/.env' });
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());
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
        if (user.length === 1) {
            const auth = yield bcrypt.compare(password, user[0].password);
            if (auth) {
                // bcrypt가 비밀번호를 확인 후, 프론트에 jwt token을 보내준다. (deploy가 되면, 쿠키를 보낸다.)
                const token = yield createToken(user[0].user_id);
                const decoded = yield jwt.verify(token, process.env.TOKEN_SEC);
                yield console.log(process.env.TOKEN_SEC);
                yield res.status(200).json(token);
            }
            else {
                res.status(401).json({ msg: 'unauthorized' });
            }
            // Error handling if the user is not found, or if it's bad request.
        }
        else if (user.length === 0) {
            res.status(200).json({ msg: 'no user found' });
        }
        else {
            res.status(400).json({ msg: 'bad request' });
        }
    }
    catch (error) {
        throw Error;
    }
});
const createToken = (id) => {
    return jwt.sign({ id }, process.env.TOKEN_SEC, {
        expiresIn: "7 days"
    });
};
