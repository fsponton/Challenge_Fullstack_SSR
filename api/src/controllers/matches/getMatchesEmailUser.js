import UserService from "../../DB/userService.js"
import MatchesService from "../../DB/matchesService.js"

const userService = new UserService()
const matchesService = new MatchesService()

export default async (req, res) => {
    const { emailUser } = req.params

    const userID = await userService.findByEmail({ email: emailUser })

    const wins = await matchesService.findWinsByIDUser({ id: parseInt(userID) })

    const loss = await matchesService.findLossByIDUser({ id: parseInt(userID) })

    const result = { wins, loss }

    return res.status(200)
        .send({ status: "Success", message: `matches by user: ${emailUser} within a given date range`, data: result })
}