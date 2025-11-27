//Controladores das rotas de depoimentos
const depoimentos = require("../mocks/depoimentos.json");

//Retorna todos os depoimentos
async function todosDepoimentos(req, res) {
    res.status(200).json(depoimentos);
}

//Retorna 3 depoimentos randomicos
async function tresDepoimentosAleatorios(req, res) {
    try {
        const filterDepoiments = [];
        const randomNumberList = [];

        while (filterDepoiments.length < 3) {
            const randomNumber = Math.floor(Math.random() * depoimentos.length);

            if (randomNumberList.includes(randomNumber)) {
                continue; 
            }

            randomNumberList.push(randomNumber);
            filterDepoiments.push(depoimentos[randomNumber]);
        }

        return res.status(200).json(filterDepoiments);

    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
}

module.exports = {
    todosDepoimentos,
    tresDepoimentosAleatorios
}