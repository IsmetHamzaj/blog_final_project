const express = require('express')
const router = express.Router()

const {getAllUsers, getUserById, createUser} = require('./../controllers/userControllers')


router.route("/").get(getAllUsers).post(createUser)
router.route("/:id").get(getUserById)

module.exports = router