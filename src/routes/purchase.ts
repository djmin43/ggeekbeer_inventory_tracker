const express = require('express')
const router = express.Router();
const purchaseController = require('../controllers/purchaseController')

router.get('/data', purchaseController.purchaseGet)



module.exports = router;
export {};
