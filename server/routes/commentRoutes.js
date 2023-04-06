const express = require('express')
const router = express.Router()

const {getAllComments, getCommentById, createComments} = require('./../controllers/commentsController')


router.route("/").get(getAllComments).post(createComments)
router.route("/:id").get(getCommentById)


module.exports = router