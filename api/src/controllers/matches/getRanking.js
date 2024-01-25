import MatchesService from "../../DB/matchesService.js"

const matchesService = new MatchesService()

export default async (req, res) => {
    const { quantity } = req.params
    const result = await matchesService.getByRanking({ quantity: parseInt(quantity) })
    return res.status(200)
        .send({ status: "Success", message: `Ranking: ${quantity !== undefined ? quantity : 10}`, data: result })
}