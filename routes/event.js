"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
router.get('/data', eventController.getEvent);
router.post('/brew_event', eventController.brewEvent);
router.post('/purchase_event', eventController.purchaseEvent);
module.exports = router;
