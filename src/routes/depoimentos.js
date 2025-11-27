//Rotas de depoimentos
const express = require("express");
const router = express.Router();
const depoimentosControllers = require("../controllers/depoimentosControllers");

//Rota para retornar todos os depoimentos
router.get("/depoimentos", depoimentosControllers.todosDepoimentos);

module.exports = router;
