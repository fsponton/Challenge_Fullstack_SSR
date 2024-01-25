import { Router } from "express"
import { registerValidator, getByDateAndUserValidator, getByDateValidator } from "../middlewares/matches/index.js";
import { verifyToken, verifyRoleAdminAndConsultant, verifyRoleAdmin } from "../middlewares/users/index.js"
import { registerMatch, getAll, getRanking, getMatchesEmailUser, getByDateAndUser, getByDate } from "../controllers/matches/index.js";

const routerMatches = Router();

// register match // admin
routerMatches.post("/register", verifyToken, verifyRoleAdmin, registerValidator, registerMatch)

//matches // consultant or admin
routerMatches.get("/", verifyToken, verifyRoleAdminAndConsultant, getAll)

//matches ranking "n" quantity  // consultant or admin
routerMatches.get("/ranking/:quantity", verifyToken, verifyRoleAdminAndConsultant, getRanking)

// //matches by ranking default = top 10 //consultant or admin
routerMatches.get("/ranking", verifyToken, verifyRoleAdminAndConsultant, getRanking)

//search matches by date and useremail/id for user
routerMatches.get("/bydateanduser", verifyToken, getByDateAndUserValidator, getByDateAndUser)

//search matches by only date for admin or consultant
routerMatches.get("/bydate", verifyToken, verifyRoleAdminAndConsultant, getByDateValidator, getByDate)

//matches for USER by ID // user or consultant or admin
routerMatches.get("/:emailUser", verifyToken, getMatchesEmailUser)

export default routerMatches;