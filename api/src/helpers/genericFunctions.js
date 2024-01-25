import { DateError, UserError } from "../utils/errors/index.js";

const roles = ["ADMIN", "PLAYER", "CONSULTANT"]

const isValidRole = (key, value) => {
    if (!roles.includes(value)) {
        throw new UserError(`The value: ${value} on Key: ${key} is invalid`)
    }
    return value
}


const isString = (value) => {
    return typeof value === 'string' && value !== null
}

const parseToString = (key, value) => {

    if (!isString(value) || value.length < 3) {
        throw new UserError(`Bad Request: The value on key: ${key} is not valid or missing. The value should have at least 3 characters.`, 400)
    }
    return value;
}

const isNumber = (key, value) => {

    if (typeof value !== 'number' || isNaN(value) || !isFinite(value)) {
        throw new UserError(`The value of Key: ${key} is not numeric`)
    }
    return value;
}


const regexFecha = /^\d{4}-\d{2}-\d{2}$/;

const isValidDate = (date) => {

    if (!regexFecha.test(date)) {
        throw new DateError('Invalid Date. Only valid date YYYY-MM-DD', 400);
    }

    const formatDate = date.split('-');
    const year = parseInt(formatDate[0]);
    const mounth = parseInt(formatDate[1]);
    const day = parseInt(formatDate[2]);


    if (isNaN(year) || isNaN(mounth) || isNaN(day)) {
        throw new DateError('Invalid Date. The year, mounth and day are become numerics', 400);
    }


    if (mounth < 1 || mounth > 12 || day < 1 || day > 31) {
        throw new DateError('Invalid Date. Mounth or Day outside of range', 400);;
    }

    return date;
}

export {
    parseToString,
    isNumber,
    isValidDate,
    isValidRole
}