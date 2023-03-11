const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = "hG7kL9a12jB4c6dE8f0iJ3mN5oP1qRtS"

console.log(JWT_SECRET_KEY)

function generateToken(userId) {
    const token = jwt.sign({ userId }, JWT_SECRET_KEY, { expiresIn: '1h' });
    return token;
}

module.exports = {
    generateToken,
    JWT_SECRET_KEY
};