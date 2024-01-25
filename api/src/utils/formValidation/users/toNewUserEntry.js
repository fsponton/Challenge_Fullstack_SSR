import { isValidRole } from "../../../helpers/genericFunctions.js"
import { isValidEmail, isValidNewPassword, parseToString } from "../../../helpers/users/index.js"

const toNewUserEntry = ({ full_name, email, password, role }) => {

    const newEntry = {
        full_name: parseToString('full_name', full_name),
        email: isValidEmail('email', email),
        password: isValidNewPassword(password),
        role: isValidRole('role', role)
    }

    return newEntry
}

export { toNewUserEntry };