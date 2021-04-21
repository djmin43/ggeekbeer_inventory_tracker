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
exports.seed = void 0;
const Knext = require('knex');
function seed(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        // Deletes ALL existing entries
        yield knex.raw('TRUNCATE TABLE "inventory" CASCADE');
        yield knex.raw('TRUNCATE TABLE "brewer" CASCADE');
        yield knex.raw('TRUNCATE TABLE "event" CASCADE');
        // Inserts seed entries
        yield knex("inventory").insert([
            {
                id: 1,
                item_name: "sample_hop",
                type: "hop",
                amount_kg: "99",
                received: "2021-04-21",
                expiration_date: "2022-12-25",
                provider: "Yakima, California, USA"
            },
            {
                id: 2,
                item_name: "sample_malt",
                type: "malt",
                amount_kg: "5",
                received: "2021-04-21",
                expiration_date: "2022-12-25",
                provider: "Berlin, Germany"
            },
        ]);
        yield knex("brewer").insert([
            {
                id: 1,
                brewer_id: "sample11",
                password: "12345678",
                brewer_name: "김꿀꺽"
            },
        ]);
        yield knex("event").insert([
            {
                id: 1,
                event_date: "2021-06-21",
                description: "sample data - brewing sample beer. ex: using 3 kg of fresh hops, 5kg of black malt, and 10g of lager yeast",
                inventory_id: "1",
                brewer_id: "1"
            },
            {
                id: 2,
                event_date: "2021-06-21",
                description: "sample data - brewing sample beer. ex: using 3 kg of fresh hops, 5kg of black malt, and 10g of lager yeast",
                inventory_id: "2",
                brewer_id: "1"
            },
        ]);
    });
}
exports.seed = seed;
;
