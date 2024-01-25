import keysValidator from "../../helpers/keysValidator.js"
import getOriginalKeysPath from "../../helpers/matches/getOriginalKeysForPath.js"
import { toGetByDateAndUser } from "../../utils/formValidation/matches/toGetByDateAndUser.js"


export default (req, _res, next) => {
    const { startDate, endDate, emailUser } = req.query

    const originalKeys = getOriginalKeysPath(req.path)

    keysValidator(Object.keys(req.query), originalKeys)

    req.getByDateAndUser = toGetByDateAndUser({ startDate, endDate, emailUser })

    next()
}
