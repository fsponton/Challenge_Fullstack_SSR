import keysValidator from "../../helpers/keysValidator.js"
import getOriginalKeysPath from "../../helpers/users/getOriginalKeysForPath.js"
import { toNewUserEntry } from "../../utils/formValidation/users/toNewUserEntry.js"

export default (req, _res, next) => {
    const { full_name, email, password, role } = req.body

    const originalKeys = getOriginalKeysPath(req.path)

    keysValidator(Object.keys(req.body), originalKeys)

    req.newUserEntry = toNewUserEntry({ full_name, email, password, role })

    next()
}

