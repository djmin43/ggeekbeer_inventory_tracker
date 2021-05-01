"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
router.get('/data', eventController.eventGet);
router.post('/brew_event', eventController.postBrewEvent);
module.exports = router;
