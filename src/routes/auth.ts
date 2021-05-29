const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')
const verifyUser = require('../middleware/verifyUser')


router.post('/sign_up',verifyUser, authController.signUp)
router.post('/log-in', verifyUser, authController.logIn)
router.get('/verify', verifyUser, authController.verifyUser)
router.get('/log-out', verifyUser, authController.logOut )


module.exports = router;

export {}