const express = require('express')
const router = express.Router()
const {getAllUsers,getSingleUser,showCurrentUser,updateUser,updateUserPassword} = require('../controllers/userControllers')
const authenitcated = require('../middleware/authenticated')

router.route('/').get(authenitcated,getAllUsers)
router.route('/me').get(showCurrentUser)
router.route('/update-password').patch(updateUserPassword)
router.route('/:id').get(getSingleUser).patch(updateUser)
module.exports = router;