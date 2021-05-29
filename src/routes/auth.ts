const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')
const verifyUser = require('../middleware/verifyUser')


router.post('/sign-up', authController.signUp)
router.post('/log-in', authController.logIn)
router.get('/verify', authController.verifyUser)
router.get('/log-out', authController.logOut )


module.exports = router;

export {}