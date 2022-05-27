const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = function (req, res, next) {
    // trying to grab token 
    const authHeader = req.get('Authorization') || req.query.token || req.body.token;
    if (authHeader) {
        const token = authHeader.replace('Bearer ', '')

        if (!token || token === 'null') {
            res.status(500).send('No token provided')
            return;
        }
        
        jwt.verify(token, SECRET, function (err, decodedToken) {
            console.log('err', err)
            if (err) {
                res.status(500).send(err)
                return;
            }

            console.log('decodedToken', decodedToken)
            if (!decodedToken) {
                res.status(500).send('Wasnt able to decode token')
                return;
            }

            req.user = decodedToken.user
            next()
        })
    } else {
        next()
    }
}