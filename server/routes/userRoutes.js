const express = require('express')
const router = express.Router()

const {getAllUsers, getUserById, register, login} = require('./../controllers/userControllers')


router.route("/").get(getAllUsers).post(login)
router.route("/register").post(register)
router.route("/:id").get(getUserById)

module.exports = router