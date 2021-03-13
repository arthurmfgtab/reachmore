const router = require('express').Router()
const checkAuth = require('./../middlewares/check-auth')
const authController = require('./../controllers/auth')

router.post('/sign_in', authController.signIn)

module.exports = router