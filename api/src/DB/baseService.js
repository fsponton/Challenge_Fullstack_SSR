import { PrismaClient } from "@prisma/client";
import { DatabaseError, NotFoundError } from "../utils/errors/index.js";

const prisma = new PrismaClient();

class BaseService {
    constructor(modelName) {
        this.modelName = modelName;
    }

    async create(data) {
        try {
            return await prisma[this.modelName].create({
                data,
            });
        } catch (error) {
            throw new DatabaseError(`Error creating ${this.modelName}: ${error.message}`);
        }
    }

    async findById(id) {
        try {
            const result = await prisma[this.modelName].findUnique({
                where: { id },
            });
            if (!result) { throw new NotFoundError(`The ${this.modelName} with ID: ${id} doesn't exist`, 404) }
            return result
        } catch (error) {
            throw new DatabaseError(`Error retrieving ${this.modelName}: ${error.message}`);
        }
    }

    async findAll() {
        try {
            return await prisma[this.modelName].findMany();
        } catch (error) {
            throw new DatabaseError(`Error retrieving ${this.modelName}s: ${error.message}`);
        }
    }

}

export default BaseService;