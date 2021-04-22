const express = require('express')
const router = express.Router();
const inventoryController = require('../controllers/inventoryControllers')


router.get('/purchase', inventoryController.purchase_get)


module.exports = router;
export {};
