const express = require('express')
const router = express.Router();
const invController = require('../controllers/invController')
const verifyUser = require('../middleware/verifyUser')


router.get('/', verifyUser, invController.inventoryGet);
router.post('/', verifyUser, invController.inventoryPostNew);
router.patch('/use', verifyUser, invController.inventoryUse)
router.patch('/', verifyUser, invController.inventoryEdit)

module.exports = router;
export{};