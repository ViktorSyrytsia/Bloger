const { UserModel } = require('../models/index')
const jwt = require('jsonwebtoken');

exports.me = async (req, res, next) => {
    if (req.headers && req.headers.authorization) {
        const authorization = req.headers.authorization;
        let decoded
        try {
            decoded = jwt.verify(authorization, 'secret');
        } catch (e) {
            return res.status(401).send('unauthorized');
        }
        const userId = decoded.id;
        req.user = await UserModel.findById(userId)
        next()
    }
    return res.status(500).json({});
}