const express = require('express')
const router = express.Router()

const {getAllUsers, getUserById, register} = require('./../controllers/userControllers')


router.route("/").get(getAllUsers).post(register)
router.route("/:id").get(getUserById)

module.exports = router