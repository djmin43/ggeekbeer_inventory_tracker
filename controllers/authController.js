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
module.exports.verifyUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clientToken = req.cookies.ggeek_member;
    try {
        if (clientToken) {
            const decoded = yield jwt.verify(clientToken, process.env.TOKEN_SEC);
            const verifyUser = yield User.query().select('user_id', 'user_name').where('user_id', decoded.id);
            console.log(verifyUser);
            res.status(200).json(verifyUser[0]);
        }
        else {
            res.status(401).json({ msg: 'unauthorized' });
        }
    }
    catch (err) {
        res.status(401).json({ msg: 'unauthorized' });
    }
});
module.exports.signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, userName, password, code } = req.body;
    try {
        // Basic Validation
        if (code !== process.env.CODE) {
            res.status(401).json({ msg: '코드가 틀렸습니다. 다시 확인해주세요.' });
        }
        else if (userId === '' || userName === '' || password === '' || code === '') {
            res.status(401).json({ msg: `empty spaces` });
        }
        // If validation passes!
        else {
            bcrypt.genSalt(10, function (err, salt) {
                bcrypt.hash(password, salt, function (err, hash) {
                    return __awaiter(this, void 0, void 0, function* () {
                        try {
                            const singUp = yield User.query().insert({
                                user_name: userName,
                                user_id: userId,
                                password: hash
                            });
                            res.status(200).json({ msg: `${userId}의 새로운 아이디가 생성되었습니다. 로그인 해주세요.` });
                        }
                        catch (error) {
                            // Error code 23505 -> unique id contraint
                            if (error.nativeError.code === `23505`) {
                                res.status(400).json({ msg: `이미 존재하는 아이디입니다. 새로운 아이디로 다시 가입해주세요.` });
                            }
                            else {
                                console.log(error);
                            }
                        }
                    });
                });
            });
        }
    }
    catch (error) {
        console.log('ahsdjfsadfhjksdafhsadkf');
        console.log(error.message);
        // if (error.nativeError.code == '23505') {
        //     res.status(401).json({msg: `user id exists already`})
        // }
    }
});
module.exports.logIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, password } = req.body;
    try {
        const user = yield User.query().select('user_id', 'password').where('user_id', userId);
        if (user.length >= 1) {
            const auth = yield bcrypt.compare(password, user[0].password);
            if (auth) {
                // bcrypt가 비밀번호를 확인 후, jwt cookie를 만든다. 
                const token = yield createToken(user[0].user_id);
                yield res.cookie('ggeek_member', token, { httpOnly: true });
                yield res.status(200).json({ msg: 'log in successful!' });
                console.log('success');
            }
            else {
                res.status(401).json({ msg: 'unauthorized' });
                console.log('nono');
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
        console.log(error);
    }
});
module.exports.logOut = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('log out');
        res.clearCookie("ggeek_member").status(200).json({ msg: 'log out successful' });
    }
    catch (error) {
        console.log(error);
    }
});
const createToken = (id) => {
    return jwt.sign({ id }, process.env.TOKEN_SEC, {
        expiresIn: "3 days"
    });
};
