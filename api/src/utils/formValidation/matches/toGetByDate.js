import { isValidDate } from "../../../helpers/genericFunctions.js"

const toGetByDate = ({ startDate, endDate }) => {

    const getByDate = {
        startDate: isValidDate(startDate),
        endDate: isValidDate(endDate)
    }

    return getByDate
}

export { toGetByDate };