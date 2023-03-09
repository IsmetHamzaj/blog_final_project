const Blog = require('./../models/blogModel')

const getAllBlogs = async (req, res) => {
    await Blog.find().then((blogs) => {
        if(blogs.length > 0 ) {
            res.status(200).json({
                status: "Success",
                data: blogs
            })
        } else {
            res.status(200).json({
                status: "Success",
                message: "There are no blogs to display at the moment"
            })
        }
    }).catch((err) => {
        console.log("Gabim: ", err)
    })
}


const getBlogById = async (req, res) => {
    try {
        const blogPost = await Blog.findById(req.params.id)
        if(!blogPost) {
            res.status(404).json({
                status: "Success",
                success: true,
                message: "Blog post not found"
            })
        } else {
            res.json(200).json({
                status: "Success",
                success: true,
                data: blogPost
            })
        }
    } catch (error) {
        res.status(500).json({
            status: "Failed",
            success: false,
            message: error
        })
    }
}


module.exports = {getAllBlogs, getBlogById}