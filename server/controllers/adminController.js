const Blog = require('./../models/blogModel')
const Category = require('./../models/categoryModel')
const Comment = require('./../models/commentsModel')
const User = require('./../models/userModel')



const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        if (users.length > 0) {
            res.status(200).json({
                status: "Success",
                success: true,
                data: users
            })
        } else {
            res.status(404).json({
                status: "Success",
                message: "There are no users"
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


module.exports = getAllUsers