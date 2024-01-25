import loginValidatorModule from "./loginValidator.js"
import registerValidatorModule from "./registerValidator.js";
import verifyTokenModule from "./verifyToken.js";
import verifyRoleAdminModule from "./verifyRoleAdmin.js"
import verifyRoleAdminAndConsultantModule from "./verifyRoleAdminAndConsultant.js";

export const verifyToken = verifyTokenModule
export const verifyRoleAdmin = verifyRoleAdminModule
export const loginValidator = loginValidatorModule
export const registerValidator = registerValidatorModule
export const verifyRoleAdminAndConsultant = verifyRoleAdminAndConsultantModule