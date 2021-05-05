const express = require('express')
const router = express.Router();
const invController = require('../controllers/invController');


router.get('/data', invController.inventoryGet);

router.patch('/update', invController.inventoryPatch);

router.post('/new', invController.inventoryNew);


module.exports = router;
export{};