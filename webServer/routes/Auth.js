const express = require('express')
const router = express.Router()

const { signIn, signUp } = require('../midllewares/User.js')


// router.route('/singIn').get(authMiddleware, dashboard)
router.route('/signUp').post(signUp)



module.exports = router