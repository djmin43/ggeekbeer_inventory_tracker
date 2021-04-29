const express = require('express')
const router = express.Router();
const brewController = require('../controllers/brewController')


// router.get('/', brewController.brew_get)

// List out information going to front-end -> Information used by user.

router.post('/new', brewController.brewPost);
router.post('/event', brewController.brewEvent);
router.post('/inventory', brewController.brewInvUpdate);

// @BREWING
// Brewing
// in 'brew': brew type, date, name, description, and (user_id from user table)
// in 'event' (loop through per inventory item): event type -> brew, event date, change amount(-), inventory id(findby id), brew id
// in 'inventory'(loop through per inventory item used): PATCH item name (-), item type, item amount(-) 

module.exports = router;
export {};
