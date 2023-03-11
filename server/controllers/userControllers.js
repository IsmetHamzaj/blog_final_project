const User = require('./../models/userModel')
const { generateToken } = require('./auth');

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



const register = async (req, res) => {
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


const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email, password: req.body.password })
        if (!user) {
            return res
                .status(404)
                .json({ message: "Invalid email or password", success: false })
        }
        const isPasswordValid = await user.comparePassword(req.body.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }


        const token = generateToken(user._id);
        return res.status(200).json({ token });
    } catch (error) {
        console.log(err)
        res
            .status(500)
            .json({ message: "Internal server error", success: false, err })
    }
}


module.exports = { getAllUsers, getUserById, register, login }