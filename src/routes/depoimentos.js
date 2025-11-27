//Rotas de depoimentos
const express = require("express");
const router = express.Router();
const depoimentosControllers = require("../controllers/depoimentosControllers");

//Rota para retornar todos os depoimentos
router.get("/depoimentos", depoimentosControllers.todosDepoimentos);

//Rota para retornar 3 depoimentos randomicos
router.get("/depoimentos-home", depoimentosControllers.tresDepoimentosAleatorios);

module.exports = router;
