"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var knex_1 = __importDefault(require("knex"));
var objection_1 = require("objection");
var knexfile = require('./knexfile');
function setupDb() {
    var db = knex_1.default(knexfile.development);
    objection_1.Model.knex(db);
    console.log('db connected');
}
;
exports.default = setupDb;
