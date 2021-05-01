const express = require('express')
const router = express.Router();
const eventController = require('../controllers/eventController')


router.get('/data', eventController.eventGet)



module.exports = router;

export {};
