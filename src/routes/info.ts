const express = require('express')
const router = express.Router();
const infoController = require('../controllers/infoController')


router.get('/inventory', infoController.inventory_get)

// List out information going to front-end -> Information used by user.

// Render information from database
// 1. Inventory data(GET)
// 2. Brew History(GET)
// 3. Purchase History(GET)
// 4. All Event History(GET/PATCH/DELETE as needed)






module.exports = router;
export {};
