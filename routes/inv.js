"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const invController = require('../controllers/invController');
router.get('/', invController.inventoryGet);
router.post('/new', invController.inventoryPostNew);
module.exports = router;
