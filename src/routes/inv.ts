const express = require('express')
const router = express.Router();
const invController = require('../controllers/invController');


router.post('/new', invController.invPost)
router.post('/update', invController.invUpdate)
router.get('/available', invController.invAvailable)


module.exports = router;
export{};