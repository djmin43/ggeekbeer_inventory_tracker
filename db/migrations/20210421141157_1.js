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
const Knex = require('knex');
exports.up = function (knex) {
    return __awaiter(this, void 0, void 0, function* () {
        return knex.schema
            .createTable('inventory', (table) => {
            table.increments();
            table.string('item_name').notNullable();
            table.string('type').notNullable();
            table.integer('amount_kg').notNullable();
            table.date('received_date').notNullable();
            table.date('expiration_date').notNullable();
            table.string('provider').notNullable();
            table.timestamps(true, true);
        })
            .createTable('brewer', (table) => {
            table.increments();
            table.string('brewer_id').notNullable();
            table.string('password').notNullable();
            table.string('brewer_name').notNullable();
            table.timestamps(true, true);
        })
            .createTable('event', (table) => {
            table.increments();
            table.string('event_type').notNullable();
            table.date('event_date').notNullable();
            table.string('description').notNullable();
            table.integer('inventory_id').references('id').inTable('inventory');
            table.integer('brewer_id').references('id').inTable('brewer');
            table.timestamps(true, true);
        });
    });
};
exports.down = function (knex) {
    return __awaiter(this, void 0, void 0, function* () {
        return knex.schema
            .dropTableIfExists('inventory')
            .dropTableIfExists('brewer')
            .dropTableIfExists('event');
    });
};
