import { UserError } from "../../utils/errors/index.js"
import { parseToString } from "../genericFunctions.js";


// check the password to create a user or reset password
const passwordRegex = /^(?=.*[A-Z])(?=.*[\W_]).{8,}$/;

const isValidNewPassword = (password) => {
    const passwordParsed = parseToString('password', password)
    const isisValidPassword = passwordRegex.test(passwordParsed)

    isValidPassword(passwordParsed)

    if (!isisValidPassword) {
        throw new UserError("Bad Request: invalid Password. The password must contain at least 1 uppercase letter, 1 special character, and be a minimum of 6 characters long", 400)
    }

    return passwordParsed
}

// check the length of password when the user tries to login
const isValidPassword = (password) => {
    const passwordParsed = parseToString('password', password)

    if (passwordParsed.length <= 5) {
        throw new UserError("Bad Request: The password must be at least 6 characters", 400)
    }

    return passwordParsed
}

// check the email when the user tries create or login
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isValidEmail = (str, email) => {
    const emailParsed = parseToString(str, email).toLocaleLowerCase().trim()
    const isEmail = emailRegex.test(emailParsed)

    if (!isEmail) {
        throw new UserError("Bad Request: Invalid Email", 400);
    }

    return emailParsed;
}

export {
    isValidEmail,
    parseToString,
    isValidNewPassword,
    isValidPassword
}