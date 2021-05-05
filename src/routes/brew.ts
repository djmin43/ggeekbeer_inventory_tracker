const express = require('express')
const router = express.Router();
const brewController = require('../controllers/brewController')



router.get('/data', brewController.brewGet)
router.post('/add_new', brewController.brewPost)
router.delete('/delete/:id', brewController.brewDelete)

module.exports = router;
export {};
