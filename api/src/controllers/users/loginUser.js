import UserService from "../../DB/userService.js"

const userService = new UserService('User')

export default async (req, res) => {
    const { email, password } = req.loginData
    const result = await userService.authentication({ email, password })
    return res.status(200)
        .header('Authorization', `Bearer ${result.Authorization}`)
        .json({ status: "Success", message: `Hi ${result.email} you are logged`, authorization: result.Authorization })
}

