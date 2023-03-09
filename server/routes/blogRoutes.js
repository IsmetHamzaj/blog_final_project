const express = require('express')
const router = express.Router()

const {getAllBlogs, getBlogById, createBlog} = require('./../controllers/blogControllers')

router.route("/").get(getAllBlogs).post(createBlog)
router.route("/:id").get(getBlogById)


module.exports = router