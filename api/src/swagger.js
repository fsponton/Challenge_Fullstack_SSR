import swaggerJSDoc from "swagger-jsdoc"
import { requests } from "./routes/workoutRoutes.js";

const options = {
    definition: {
        openapi: "3.0.1",
        info: {
            title: "Postgress + Prisma ORM + Node.JS + Express",
            version: "1.0.0"
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                }
            }
        },
        security: [{
            bearerAuth: []
        }],
        servers: [
            {
                url: "http://localhost:3000"
            }
        ]
    },
    apis: []
};
// Normalmente deberia agregar un archivo con toda la documentacion de swagger, y ponerlo dentro de apis el directorio
// Le di mil vueltas, se por donde viene el tema pero con el tiempo que tengo prefiero solucionarlo de otra manera y tener un entregable.

let swaggerSpec = swaggerJSDoc(options);

swaggerSpec.paths['/users/login/'] = requests('/users/login/')
swaggerSpec.paths['/users/register/'] = requests('/users/register/')
swaggerSpec.paths['/matches/'] = requests('/matches/')
swaggerSpec.paths['/matches/bydate'] = requests('/matches/bydate')


export default swaggerSpec;