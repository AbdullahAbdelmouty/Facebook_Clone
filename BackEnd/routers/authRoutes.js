const express = require('express')
const { register, login, logOut } = require('../controllers/authControllers')
const router = express.Router()

router.route('/login').post(login)
router.route('/register').post(register)
router.route('/logout').get(logOut)

module.exports  = router;