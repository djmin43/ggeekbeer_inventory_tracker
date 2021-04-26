"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const purchaseController = require('../controllers/purchaseController');
router.post('/new', purchaseController.purchase_post);
// @PURCHASE
// Purchasing ingredients
// in 'purchase': purchase date, description, amount, date, vendor on purchase table;
// in 'event': event type -> purchase, event date, change amount(+), inventory id(either create a new entry, or use the existing one), user id(that's checked by jwt), purchase id
// in 'inventory': item name(if there is no existing item, create one), item type, item amount(+), expiriation date, item description
module.exports = router;
