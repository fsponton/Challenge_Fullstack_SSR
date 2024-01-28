import loginService from "./login"
import addMatchService from "./addMatch"
import addUserService from "./addUser"
import getAllMatchesService from "./getAllMatches"
import getMatchesByUserService from "./getMatchesByUser"
import getByRankingService from "./getByRanking"
import getByDateService from "./getMatchesByDate"
import userSearchByDateService from "./userSearchByDate"
import getAllPlayersService from "./getAllPlayers"

export const login = loginService
export const addMatch = addMatchService
export const addUser = addUserService
export const getAllMatches = getAllMatchesService
export const getMatchesByUser = getMatchesByUserService
export const getByRanking = getByRankingService
export const getByDate = getByDateService
export const userSearchByDate = userSearchByDateService
export const getAllPlayers = getAllPlayersService

