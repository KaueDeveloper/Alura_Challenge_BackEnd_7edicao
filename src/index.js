const express = require("express");
const SERVER = require("./server/server");

//Rotas
const depoimentosRoutes = require("./routes/depoimentos");

SERVER.routes([depoimentosRoutes]);



SERVER.on(8080);