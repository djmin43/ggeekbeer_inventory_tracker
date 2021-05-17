const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')

router.post('/sign_up', authController.signUp)
router.post('/log_in', authController.logIn)

module.exports = router;

export {}