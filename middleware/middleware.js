//get employee by token
const jwt = require('jsonwebtoken');
const authenMiddleware = {}
authenMiddleware.authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization
    if (authHeader === undefined) return res.status(403).json('Missing authentication')
    const token = authHeader.split(' ')[1]
    // console.log(token)
    if (token === null) return res.sendStatus(401)
    jwt.verify(token, process.env.JWT_PRIVATE_KEY, (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user
        next()//xong middleware den controller
    })
}
module.exports = authenMiddleware
