import MatchesService from "../../DB/matchesService.js"
import UserService from "../../DB/userService.js"

const userService = new UserService()
const matchesService = new MatchesService()

export default async (req, res) => {
    const { startDate, endDate, emailUser } = req.getByDateAndUser

    const userID = await userService.findByEmail({ email: emailUser })

    let result = await matchesService.findByDateAndUser({ startDate, endDate, userID })

    result.userID = userID

    return res.status(200)
        .send({ status: "Success", message: `Matches by user ID: ${userID} between: ${startDate} - ${endDate} `, data: result })
}