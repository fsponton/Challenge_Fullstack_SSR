import { PrismaClient } from "@prisma/client";
import BaseService from "../DB/baseService.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { PASSWORD_TOKEN } from "../config/enviroments.js";
import { DatabaseError, UserError, NotFoundError } from "../utils/errors/index.js";


const prisma = new PrismaClient();

class UserService extends BaseService {

    async authentication({ email, password }) {
        try {
            const user = await prisma.user.findUnique({ where: { email } });

            if (!user) {
                throw new UserError('User not found', 404);
            }

            const encryptedPassword = await bcrypt.compare(password, user.password);

            if (!encryptedPassword) {
                throw new UserError('Invalid email or password', 401);
            }

            const userForToken = {
                id: user.id,
                full_name: user.full_name,
                email: user.email,
                role: user.role
            };

            const Authorization = jwt.sign(userForToken, `${PASSWORD_TOKEN}`, { expiresIn: 60 * 60 });

            return { ...userForToken, Authorization };
        } catch (error) {
            throw new UserError(`Error when try login sesion: ${error.message}`, error.code);
        }
    }

    async findByEmail({ email }) {
        try {
            const result = await prisma.user.findUnique({
                where: { email },
            });
            if (!result) { throw new NotFoundError(`The user with email: ${email} doesn't exist`, 404) }

            return result.id
        } catch (error) {
            throw new DatabaseError(`Error retrieving user with email: ${email}, ${error.message}`);
        }
    }

    async findAll() {
        try {
            return await prisma.user.findMany({
                select: {
                    id: true,
                    full_name: true,
                    email: true,
                    role: true
                },
            });

        } catch (error) {
            throw new DatabaseError(`Error retrieving users, ${error.message}`);
        }
    }



}

export default UserService;