const express = require('express')
const router = express.Router();
const eventController = require('../controllers/eventController')


router.get('/', eventController.getEvent)


module.exports = router;

export {};
