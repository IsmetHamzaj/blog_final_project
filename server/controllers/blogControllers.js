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



module.exports = getAllBlogs