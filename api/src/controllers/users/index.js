import catchedAsync from "../../utils/catchedAsync.js"

import registerUserModule from "./registerUser.js"
import loginUserModule from "./loginUser.js"
import getAllModule from "./getAll.js"


export const registerUser = catchedAsync(registerUserModule)
export const loginUser = catchedAsync(loginUserModule)
export const getAll = catchedAsync(getAllModule)
