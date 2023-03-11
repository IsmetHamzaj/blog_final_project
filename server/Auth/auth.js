const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = process.env;

function generateToken(userId) {
    const token = jwt.sign({ userId }, JWT_SECRET_KEY, { expiresIn: '1h' });
    return token;
}

module.exports = {
    generateToken
};