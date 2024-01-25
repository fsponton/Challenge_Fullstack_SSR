import express from "express"
import bodyParser from "body-parser";
import morgan from "morgan";

export const server = express();
import routerUsers from "./routes/routerUsers.js"
import routerMatches from "./routes/routerMatches.js";


// middlewares
server.use(express.json());
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(morgan('dev'));
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//routes
server.use('/users', routerUsers);
server.use('/matches', routerMatches)



server.use((error, _req, res, _next) => {
    console.log('ERROR on server', error)
    // //errores duplicados cuando se inteta registrar un dato unico que existe, ej email
    // if (error.code === 'P2002') {
    //     return res.status(409).send({
    //         error: true,
    //         errorName: 'Duplicate Unique',
    //         message: `The ${error.meta.target[0]} has already exists on the database`
    //     })
    // }
    return res.status(error.code).send({
        error: true,
        errorName: error.name,
        message: error.message
    })

})