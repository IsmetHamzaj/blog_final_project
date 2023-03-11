const { JWT_SECRET_KEY } = require('./../Auth/auth')
const jwt = require('jsonwebtoken')

function requireAuth(req, res, next) {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({ message: 'Missing authorization header' });
        }
        const token = authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Invalid authorization header' });
        }
        const decodedToken = jwt.verify(token, JWT_SECRET_KEY);
        req.userId = decodedToken.userId;
        next();
    } catch (err) {
        console.error(err);
        return res.status(401).json({ message: 'Invalid or expired token' });
    }
}