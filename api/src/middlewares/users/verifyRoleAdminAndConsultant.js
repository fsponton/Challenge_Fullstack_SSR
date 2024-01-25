import { AccessError } from "../../utils/errors/index.js"

export default (req, _res, next) => {
    const { token } = req

    if (token.role === "ADMIN" || token.role === 'CONSULTANT') {
        next()
        return
    }
    throw new AccessError("The user isn't an admin")
}