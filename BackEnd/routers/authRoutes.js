const express = require('express')
const { register, login, logOut } = require('../controllers/authControllers')
const router = express.Router()

router.post('/login').post(login)
router.route('/register').post(register)
router.route('/logout').get(logOut)

module.exports  = router;