import { PrismaClient } from "@prisma/client";
import BaseService from "../DB/baseService.js";
import { DatabaseError, NotFoundError } from "../utils/errors/index.js";

const prisma = new PrismaClient();

class MatchesService extends BaseService {

    async getByRanking({ quantity }) {
        try {
            const result = await prisma.matches.groupBy({
                by: ['id_win'],
                _count: {
                    id_win: true,
                }
            })

            const ranking = result
                .map(entry => ({
                    wins: entry._count.id_win,
                    id_player: entry.id_win,
                }))
                .sort((a, b) => b.wins - a.wins)
                .slice(0, quantity || 10)

            return ranking

        } catch (error) {
            throw new DatabaseError(`Error retrieving ranking of users by quantity:  ${quantity !== undefined ? quantity : 10}, ${error.message}`);
        }
    }

    async findWinsByIDUser({ id }) {
        try {
            const result = await prisma.matches.findMany({
                where: { id_win: id },
            });
            if (!result) { throw new NotFoundError(`The matches with user ID: ${id} doesn't exist`, 404) }
            return result
        } catch (error) {
            throw new DatabaseError(`Error retrieving matches, ${error.message}`);
        }
    }


    async findLossByIDUser({ id }) {
        try {
            const result = await prisma.matches.findMany({
                where: { id_loss: id },
            });
            if (!result) { throw new NotFoundError(`The matches with user ID: ${id} doesn't exist`, 404) }
            return result
        } catch (error) {
            throw new DatabaseError(`Error retrieving matches, ${error.message}`);
        }
    }



    async findByDateAndUser({ startDate, endDate, userID }) {
        try {
            const result = await prisma.matches.findMany({
                where: {
                    start_date: {
                        gte: startDate,
                    },
                    end_date: {
                        lte: endDate,
                    },
                    id_win: userID,
                    playersMatches: {
                        some: {
                            id_player: userID,
                        },
                    },
                }
            })
            if (!result) { throw new NotFoundError(`The matches in range date: ${startDate} - ${endDate} doesn't exist`, 404) }
            return result
        } catch (error) {
            throw new DatabaseError(`Error retrieving matches, ${error.message}`);
        }
    }

    async findByDate({ startDate, endDate }) {
        try {
            const result = await prisma.matches.findMany({
                where: {
                    start_date: {
                        gte: startDate,
                    },
                    end_date: {
                        lte: endDate,
                    }
                }
            })
            if (!result) { throw new NotFoundError(`The matches in range date: ${startDate} - ${endDate} doesn't exist`, 404) }
            return result
        } catch (error) {
            throw new DatabaseError(`Error retrieving matches, ${error.message}`);
        }

    }
}

export default MatchesService;

