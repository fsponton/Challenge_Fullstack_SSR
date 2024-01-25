import BaseService from "../../DB/baseService.js"
import UserService from "../../DB/userService.js"

const userService = new UserService('User')
const baseService = new BaseService('Matches')
const playerMatch = new BaseService('PlayersMatch')

export default async (req, res) => {
    const {
        playerWin,
        playerLoss,
        start_date,
        end_date,
        countEnvidos,
        countWinEnvidos,
        countFlowers,
        countWinFlowers
    } = req.newMatch

    const id_win = await userService.findByEmail({ email: playerWin })
    const id_loss = await userService.findByEmail({ email: playerLoss })

    const resultMatch = await baseService.create({
        id_win,
        id_loss,
        start_date,
        end_date,
        countEnvidos,
        countWinEnvidos,
        countFlowers,
        countWinFlowers
    })

    await Promise.all([
        playerMatch.create({
            id_player: id_loss,
            id_match: resultMatch.id
        }),
        playerMatch.create({
            id_player: id_win,
            id_match: resultMatch.id
        })
    ])

    return res.status(200)
        .send({ status: "Success", message: `Se registro con exito el partido con id ${resultMatch.id}` })
}
