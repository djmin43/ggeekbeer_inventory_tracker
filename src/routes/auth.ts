const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')
const verifyUser = require('../middleware/verifyUser')


router.post('/sign_up', authController.signUp)
router.post('/log_in', authController.logIn)
router.get('/verify', authController.verifyUser)
router.get('/log_out', authController.logOut )


module.exports = router;

export {}