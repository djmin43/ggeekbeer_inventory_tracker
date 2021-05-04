const express = require('express')
const router = express.Router();
const purchaseController = require('../controllers/purchaseController')

router.get('/data', purchaseController.purchaseGet)
router.post('/add_new', purchaseController.purchasePost)



module.exports = router;
export {};
