/* eslint-disable new-cap */
const router = require('express').Router()

router.get('/', (req, res) => res.send('Hi, welcome to the Zipfy Albums API'))

module.exports = router
