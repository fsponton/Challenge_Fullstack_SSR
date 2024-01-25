import { isValidDate } from "../../../helpers/genericFunctions.js"
import { isValidEmail } from "../../../helpers/users/index.js"


const toGetByDateAndUser = ({ startDate, endDate, emailUser }) => {
    const getByDateAndUSer = {
        startDate: isValidDate(startDate),
        endDate: isValidDate(endDate),
        emailUser: isValidEmail('emailUser', emailUser)
    }

    return getByDateAndUSer
}

export { toGetByDateAndUser };