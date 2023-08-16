const express = require('express')
const { signIn, signUp, logOut } = require('../controllers/authControllers')
const router = express.Router()

router.route('/sigin').post(signIn)
router.route('/signup').post(signUp)
router.route('/logout').get(logOut)

module.exports  = router;