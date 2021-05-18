"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const verifyUser = require('../middleware/verifyUser');
router.get('/', eventController.getEvent);
router.post('/edit', verifyUser, eventController.inventoryEdit);
module.exports = router;
