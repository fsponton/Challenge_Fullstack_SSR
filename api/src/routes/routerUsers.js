import { Router } from "express"
import { verifyToken, verifyRoleAdmin, verifyRoleAdminAndConsultant, registerValidator, loginValidator } from "../middlewares/users/index.js";
import { registerUser, loginUser, getAll } from "../controllers/users/index.js"

const routerUsers = Router();

//register user // admin
routerUsers.post("/register", verifyToken, verifyRoleAdmin, registerValidator, registerUser)

//login users
routerUsers.post("/login", loginValidator, loginUser)

//consultant or admin
routerUsers.get("/", verifyToken, verifyRoleAdminAndConsultant, getAll)



export default routerUsers;