import { server } from "./server.js";
import { PORT } from "./config/enviroments.js";

server.listen(PORT, () => {
    console.log(`API listening on port: ${PORT}`);
})