import { isNumber, parseToString } from "../../../helpers/genericFunctions.js";
import { isValidEmail } from "../../../helpers/users/index.js";


const toNewMatch = ({
    playerWin,
    playerLoss,
    start_date,
    end_date,
    countEnvidos,
    countWinEnvidos,
    countFlowers,
    countWinFlowers }) => {

    const newEntryMatch = {
        playerWin: isValidEmail('playerWin', playerWin),
        playerLoss: isValidEmail('playerLoss', playerLoss),
        start_date: parseToString('start_date', start_date),
        end_date: parseToString('end_date', end_date),
        countEnvidos: isNumber('countEnvidos', countEnvidos),
        countWinEnvidos: isNumber('countWinEnvidos', countWinEnvidos),
        countFlowers: isNumber('countFlowers', countFlowers),
        countWinFlowers: isNumber('countWinFlowers', countWinFlowers)
    }

    return newEntryMatch
}

export { toNewMatch };