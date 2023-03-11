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


const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user) {
            res.status(404).json({
                status: "Success",
                success: true,
                message: "User not found"
            })
        } else {
            res.json(200).json({
                status: "Success",
                success: true,
                data: user
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



const createUser = async (req, res) => {
    try {
        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }).then((createdUser) => {
            res.status(200).json({
                status: "Success",
                success: true,
                message: "Here is the data",
                data: createdUser
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



module.exports = {getAllUsers, getUserById, createUser}