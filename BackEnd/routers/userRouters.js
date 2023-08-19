const express = require('express')
const router = express.Router()
const {getAllUsers,getSingleUser,showCurrentUser,updateUser,updateUserPassword} = require('../controllers/userControllers')
const {authenitcated,authorizePermissions} = require('../middleware/authenticated')

router.route('/').get(authenitcated,authorizePermissions('admin'),getAllUsers)
router.route('/me').get(showCurrentUser)
router.route('/update-password').patch(updateUserPassword)
router.route('/:id').get(authenitcated,getSingleUser).patch(updateUser)
module.exports = router;
