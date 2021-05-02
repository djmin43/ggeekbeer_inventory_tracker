"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const invController = require('../controllers/invController');
router.get('/data', invController.inventoryGet);
router.patch('/brew_use', invController.inventoryUsePatch);
module.exports = router;
