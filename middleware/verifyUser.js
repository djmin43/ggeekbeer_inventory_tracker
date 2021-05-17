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
const User = require('../db/model/user.js');
const SECRET = 'melon';
const verifyUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const clientToken = req.cookies.jwt;
    try {
        const decoded = jwt.verify(clientToken, SECRET);
        if (decoded) {
            const userId = yield decoded.id;
            next();
        }
        else {
            res.json({ msg: 'unauthorized' });
        }
    }
    catch (err) {
        res.json({ msg: 'unauthorized' });
    }
});
// module.exports = checkUser;
module.exports = verifyUser;
