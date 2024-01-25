import BaseService from "../../DB/baseService.js"
import bcrypt from "bcryptjs"

const baseService = new BaseService('User')

export default async (req, res) => {
    const { full_name, email, password, role } = req.newUserEntry

    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(password, salt)

    const result = await baseService.create({ full_name, email, password: passwordHash, role })
    return res.status(200)
        .send({ status: "Success", message: `The user with the email ${result.email} has been created` })
}
