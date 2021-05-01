const express = require('express')
const router = express.Router();
const invController = require('../controllers/invController');


router.get('/data', invController.inventoryGet);




module.exports = router;
export{};