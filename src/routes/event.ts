const express = require('express')
const router = express.Router();
const eventController = require('../controllers/eventController')
const verifyUser = require('../middleware/verifyUser')



router.get('/', verifyUser, eventController.getEvent)
router.post('/inventory-edit', verifyUser, eventController.inventoryEdit)

module.exports = router;

export {};
