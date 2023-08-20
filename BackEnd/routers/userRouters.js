const express = require('express')
const router = express.Router()
const {getAllUsers,getSingleUser,showCurrentUser,updateUser,updateUserPassword} = require('../controllers/userControllers')
const {authenitcated,authorizePermissions} = require('../middleware/authenticated')

router.route('/').get(authenitcated,authorizePermissions('admin'),getAllUsers)
router.route('/me').get(authenitcated,showCurrentUser)
router.route('/update-password').patch(authenitcated,updateUserPassword)
router.route('/:id').get(authenitcated,getSingleUser)
module.exports = router;
