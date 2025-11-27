//Controladores das rotas de depoimentos
const depoimentos = require("../mocks/depoimentos.json");

//Retorna todos os depoimentos
async function todosDepoimentos(req, res) {
    res.status(200).json(depoimentos);
}

module.exports = {
    todosDepoimentos
}