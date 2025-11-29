const SERVER = require("./server/server");
const cors = require("cors");

//Configuração do CORS
SERVER.configCors(cors());

//Rotas
const depoimentosRoutes = require("./routes/depoimentos");

SERVER.routes([depoimentosRoutes]);

SERVER.on(8000);