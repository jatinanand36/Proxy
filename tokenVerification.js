const jwt = require('jsonwebtoken');
const config = require('config');
const logger = require('./logging');
const { SERVICES } = require('./constants');
const tokenVerification = (req, res, next) => {
    let token = req.headers['authorization'];
    let userAgent = req.headers['user-agent'];
    if (!token && userAgent) {
        try {
            if (req.method == 'POST' && req.body) {
                req.body.userInfo = systemUserInfo;
            }
            req.user = systemUserInfo;
            req.serviceName = '/scheduled';
            // console.log('=======>',req.serviceName );
            return next();
        } catch (err) {
            logger.error({ err }, 'Unauthorized user');
            res.status(401).json({ 'status': 'error', 'msg': 'Unauthorized user' })
        }
    }

    if (!token) {
        logger.error('Unauthorized user');
        return res.status(401).json({ 'msg': 'Unauthorized user', status: 'error' })
    }
    token = token.replace('JWT ', '');
    try {
        const decoded = jwt.verify(token, config.get('JWT_SECRET'));
        var userInfo = {
            userId: decoded._id,
            userName: decoded.username,
            firstName: decoded.firstname,
            lastName: decoded.lastname
        };
        if (req.method == 'POST' && req.body) {
            req.body.userInfo = userInfo;
        }
        req.user = userInfo;
        req.serviceName = req.baseUrl;
        // console.log('=======>',req.serviceName);
        next();

    } catch (err) {
        logger.error({ err }, 'Unauthorized user');
        res.status(401).json({ 'status': 'error', 'msg': 'Unauthorized user' })
    }
};


module.exports = {
    tokenVerification
}