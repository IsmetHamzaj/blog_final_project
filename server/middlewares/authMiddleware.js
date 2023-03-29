const jwt = require("jsonwebtoken")
const { JWT_SECRET_KEY } = require('./../Auth/auth')

module.exports = async (req, res, next) => {
    try {
        const token = req.headers["authorization"].split(" ")[1]
        jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
            if (err) {
                return res.status(401).send({ message: "Auth failed", success: false })
            } else {
                req.body.userId = decoded.id
                next()
            }
        })
    } catch (error) {
        return res.status(401).send({
            message: "Auth failed",
            success: false
        })
    }
}