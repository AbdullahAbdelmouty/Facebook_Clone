const express = require('express')
const router = express.Router()
const {getAllUsers,getSingleUser,showCurrentUser,updateUser,updateUserPassword} = require('../controllers/userControllers')

router.route('/').get(getAllUsers)
router.route('/:id').get(getSingleUser).patch(updateUser)
router.route('/me').get(showCurrentUser)
router.route('/update-password').patch(updateUserPassword)
module.exports = router;
