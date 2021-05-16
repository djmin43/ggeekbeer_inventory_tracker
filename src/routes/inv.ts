const express = require('express')
const router = express.Router();
const invController = require('../controllers/invController');


router.get('/', invController.inventoryGet);
router.post('/new', invController.inventoryPostNew);
router.patch('/use', invController.inventoryUse)
router.patch('/edit', invController.inventoryEdit)

module.exports = router;
export{};