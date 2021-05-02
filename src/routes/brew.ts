const express = require('express')
const router = express.Router();
const brewController = require('../controllers/brewController')



router.get('/data', brewController.brewGet);
router.post('/post_new', brewController.brewPost)

module.exports = router;
export {};
