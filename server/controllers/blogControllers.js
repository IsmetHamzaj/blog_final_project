const Blog = require('./../models/blogModel')

const getAllBlogs = async (req, res) => {
    const page = parseInt(req.query.page) || 1
    const pageSize = parseInt(req.query.pageSize) || 10
    const totalPosts = await Blog.countDocuments().exec()
    const totalPages = Math.ceil(totalPosts / pageSize)

    await Blog.find()
        .then((blogs) => {
            if (blogs.length > 0) {
                res.status(200).json({
                    status: "Success",
                    data: blogs
                })
            } else {
                res.status(404).json({
                    status: "Success",
                    message: "There are no blogs to display at the moment",
                })
            }
        })
        .catch((err) => {
            console.log("Gabim: ", err)
        })
}


const getBlogById = async (req, res) => {
    try {
        const blogPost = await Blog.findById(req.params.id);
        if (!blogPost) {
            return res.status(404).json({
                status: "Success",
                success: true,
                message: "Blog post not found"
            });
        }
        res.status(200).json({
            status: "Success",
            success: true,
            data: blogPost
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "Failed",
            success: false,
            message: error
        });
    }
};



const createBlog = async (req, res) => {
    try {
        const newBlog = await Blog.create({
            title: req.body.title,
            description: req.body.description,
            tags: req.body.tags
        }).then((createdBlog) => {
            res.status(200).json({
                status: "Success",
                success: true,
                message: "Here is the data",
                data: createdBlog
            })
        })
    } catch (error) {
        res.status(500).json({
            status: "Failed",
            succes: false,
            message: error
        })
    }
}


module.exports = { getAllBlogs, getBlogById, createBlog }