import UserService from "../../DB/userService.js"

const userService = new UserService()

export default async (_req, res) => {
    const result = await userService.findAll()
    return res.status(200)
        .send({ status: "Success", message: `All users`, data: result })
}