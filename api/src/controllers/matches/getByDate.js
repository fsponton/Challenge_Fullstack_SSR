import MatchesService from "../../DB/matchesService.js"

const matchesService = new MatchesService()

export default async (req, res) => {
    const { startDate, endDate } = req.getByDate

    const result = await matchesService.findByDate({ startDate, endDate })

    return res.status(200)
        .send({ status: "Success", message: `Matches between: ${startDate} - ${endDate} `, data: result })
}