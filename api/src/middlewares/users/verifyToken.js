import jwt from "jsonwebtoken"
import { TokenError } from "../../utils/errors/index.js"
import { PASSWORD_TOKEN } from "../../config/enviroments.js"

//middleware for extracting token
export default (req, _res, next) => {
    const authorization = req.get('Authorization')
    let token = ''

    if (authorization && authorization.toLowerCase().startsWith('bearer')) {
        token = authorization.substring(7)
    } else { throw new TokenError("Invalid authorization", 401) }

    try {
        const decodedToken = jwt.verify(token, `${PASSWORD_TOKEN}`);

        req.token = decodedToken;

        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            throw new TokenError('Token has expired', 401);
        } else {
            throw new TokenError('Token missing or invalid', 401);
        }
    }
}