"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryControllers');
router.get('/purchase', inventoryController.purchase_get);
// List out information going to front-end -> Information used by user.
// Render information from database
// 1. Inventory data(GET)
// 2. Brew History(GET)
// 3. Purchase History(GET)
// 4. All Event History(GET/PATCH/DELETE as needed)
// @PURCHASE
// Purchasing ingredients
// in 'purchase': purchase date, description, amount, date, vendor on purchase table;
// in 'event': event type -> purchase, event date, change amount(+), inventory id(either create a new entry, or use the existing one), user id(that's checked by jwt), purchase id
// in 'inventory': item name(if there is no existing item, create one), item type, item amount(+), expiriation date, item description
// @BREWING
// Brewing
// in 'brew': brew type, date, name, description, and (user_id from user table)
// in 'event' (loop through per inventory item): event type -> brew, event date, change amount(-), inventory id(findby id), brew id
// in 'inventory'(loop through per inventory item used): PATCH item name (-), item type, item amount(-) 
module.exports = router;
