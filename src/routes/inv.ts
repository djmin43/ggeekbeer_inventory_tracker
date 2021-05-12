const express = require('express')
const router = express.Router();
const invController = require('../controllers/invController');


router.get('/', invController.inventoryGet);

module.exports = router;
export{};