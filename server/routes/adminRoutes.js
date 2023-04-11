const express = require('express')
const router = express.Router();


const getAllUsers = require('./../controllers/adminController')


router.route("/all-users").get(getAllUsers)


module.exports = router