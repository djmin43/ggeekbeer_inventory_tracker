const express = require('express')
const router = express.Router();
const eventController = require('../controllers/eventController')


router.get('/data', eventController.getEvent)
router.post('/new_event', eventController.newEvent)


module.exports = router;

export {};
