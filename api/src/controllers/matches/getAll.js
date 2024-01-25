import BaseService from "../../DB/baseService.js";

const baseService = new BaseService('Matches')

export default async (_req, res) => {
    const result = await baseService.findAll()
    return res.status(200)
        .send({ status: "Success", message: `All matches`, data: result })
}