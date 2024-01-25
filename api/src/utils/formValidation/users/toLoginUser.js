import { isValidEmail, isValidPassword } from "../../../helpers/users/index.js"

const toLoginUser = ({ email, password }) => {

    const loginData = {
        email: isValidEmail('emailLogin', email),
        password: isValidPassword(password)
    }

    return loginData
}

export { toLoginUser };