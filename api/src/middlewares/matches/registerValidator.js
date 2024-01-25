import keysValidator from "../../helpers/keysValidator.js"
import getOriginalKeysPath from "../../helpers/matches/getOriginalKeysForPath.js"
import { toNewMatch } from "../../utils/formValidation/matches/toNewMatch.js"

export default (req, _res, next) => {
    const {
        playerWin,
        playerLoss,
        start_date,
        end_date,
        countEnvidos,
        countWinEnvidos,
        countFlowers,
        countWinFlowers
    } = req.body

    const originalKeys = getOriginalKeysPath(req.path)

    keysValidator(Object.keys(req.body), originalKeys)

    req.newMatch = toNewMatch({
        playerWin,
        playerLoss,
        start_date,
        end_date,
        countEnvidos,
        countWinEnvidos,
        countFlowers,
        countWinFlowers
    })

    next()
}

