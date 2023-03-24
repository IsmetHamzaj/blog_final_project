const User = require('./../models/userModel')
const bcrypt = require('bcryptjs')
const { generateToken } = require('./../Auth/auth');
const { requireAuth } = require('./../middlewares/authMiddleware')
const jwt = require('jsonwebtoken')
const {JWT_SECRET_KEY} = require('./../Auth/auth')

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
        const userExists = await User.findOne({ email: req.body.email })
        if (userExists) {
            return res
                .status(200)
                .send({ message: "User already exists", success: false })
        }
        const password = req.body.password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)
        req.body.password = hashedPassword
        const newUser = new User(req.body)
        await newUser.save()
        res.status(200).json({
            message: "User created successfully",
            success: true,
            data: newUser
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
        console.log(req.body.email, req.body.password);
        const user = await User.findOne({ email: req.body.email});
        const token = generateToken(user?._id);
        console.log(token);
        console.log(user);
        if (!user) {
            return res.status(404).json({ message: "Invalid email or password", success: false });
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password)
        if (!isMatch) {
            return res
                .status(200)
                .send({ message: "Password is incorrect", success: false })
        } else {
            const token = jwt.sign({ id: user._id }, JWT_SECRET_KEY, { expiresIn: "1h" })
            res
                .status(200)
                .send({ message: "Login successfully", success: true, data: user })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error", success: false, error: error });
    }
};



module.exports = { getAllUsers, getUserById, register, login, requireAuth }