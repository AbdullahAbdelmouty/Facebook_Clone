const express = require('express')
const { register, signUp, logOut } = require('../controllers/authControllers')
const router = express.Router()

router.route('/login').post(register)
router.route('/register').post(signUp)
router.route('/logout').get(logOut)

module.exports  = router;