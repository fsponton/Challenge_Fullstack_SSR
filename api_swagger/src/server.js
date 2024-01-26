import express from "express"
import bodyParser from "body-parser";
import morgan from "morgan";
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from "./config/swagger.js";

export const server = express();

// middlewares
server.use(express.json());
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(morgan('dev'));
server.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // ruta del front
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//routes
server.use('/api_docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

server.use((error, _req, res, _next) => {
    console.log('ERROR en server:', error)
    return res.status(error.code).send({
        error: true,
        errorName: error.name,
        message: error.message
    })
})