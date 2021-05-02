const express = require('express')
const router = express.Router();
const invController = require('../controllers/invController');


router.get('/data', invController.inventoryGet);

router.post('/brew_use', invController.inventoryUsePost)


module.exports = router;
export{};