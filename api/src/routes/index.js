const router = require('express').Router()

router.use('/auth', require('./auth'))
router.use('/user', require('./user'))

const error = 'Route not found!'
router.use('*', (_, response) => response.status(404).json({ error }))

module.exports = router