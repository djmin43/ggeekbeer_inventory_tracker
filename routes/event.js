"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
router.get('/', eventController.getEvent);
router.post('/edit', eventController.inventoryEdit);
module.exports = router;
