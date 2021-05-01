"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const brewController = require('../controllers/brewController');
router.get('/data', brewController.brewGet);
router.get('/post_new', brewController.brewPost);
module.exports = router;
