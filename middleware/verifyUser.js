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
const jwt = require('jsonwebtoken');
const User = require('../db/models/user.js');
require('dotenv').config({ path: '../config/.env' });
const verifyUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const clientToken = req.cookies.ggeek_member;
    try {
        if (clientToken) {
            const decoded = yield jwt.verify(clientToken, process.env.TOKEN_SEC);
            const verifyUser = yield User.query().select('id', 'user_id', 'user_name').where('user_id', decoded.id);
            res.locals.user = verifyUser[0];
            next();
        }
        else {
            res.redirect('/');
            next();
        }
    }
    catch (err) {
        res.redirect('/');
        next();
    }
});
// module.exports = checkUser;
module.exports = verifyUser;
