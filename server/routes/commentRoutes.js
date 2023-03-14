const express = require('express')
const router = express.Router()

const {getAllComments, getCommentById} = require('./../controllers/commentsController')


router.route("/").get(getAllComments)
router.route("/:id").get(getCommentById)


module.exports = router