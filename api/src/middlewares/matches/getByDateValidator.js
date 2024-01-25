import keysValidator from "../../helpers/keysValidator.js"
import getOriginalKeysPath from "../../helpers/matches/getOriginalKeysForPath.js"
import { toGetByDate } from "../../utils/formValidation/matches/toGetByDate.js"


export default (req, _res, next) => {
    const { startDate, endDate } = req.query

    const originalKeys = getOriginalKeysPath(req.path)

    keysValidator(Object.keys(req.query), originalKeys)

    req.getByDate = toGetByDate({ startDate, endDate })

    next()
}