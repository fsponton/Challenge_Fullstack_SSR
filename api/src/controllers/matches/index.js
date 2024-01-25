import catchedAsync from "../../utils/catchedAsync.js";


import registerMatchModule from "./registerMatch.js"
import getAllModule from "./getAll.js"
import getRankingModule from "./getRanking.js"
import getMatchesEmailUserModule from "./getMatchesEmailUser.js";
import getByDateAndUserModule from "./getByDateAndUser.js"
import getByDateModule from "./getByDate.js"

export const registerMatch = catchedAsync(registerMatchModule)
export const getAll = catchedAsync(getAllModule)
export const getRanking = catchedAsync(getRankingModule)
export const getMatchesEmailUser = catchedAsync(getMatchesEmailUserModule)
export const getByDateAndUser = catchedAsync(getByDateAndUserModule)
export const getByDate = catchedAsync(getByDateModule)