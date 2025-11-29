const express = require("express");
const server = express();

//Utilitários
const consoleWarning = require("../utils/consoleWarning");

//Servidor
class Server {
    //Inicia o servidor
    async on(port, callbackMessage = "Servidor iniciado") {
        try {
            if(!port) {
                throw new Error("Defina uma porta para que o servidor possa escutar. Ex: Server.on(8080)");
            }

            server.listen(port, () => {
                console.log(callbackMessage);
                return callbackMessage;
            });
        }
        catch (err) {
            let errorMessage = `Erro no servidor: ${err.message}`;

            console.error(errorMessage);
            return errorMessage;
        }
    }

    //Define todas as rotas do servidor
    async routes(routes) {
        try {
            if(!routes || routes.length === 0) {
                consoleWarning("Aviso: As rotas do servidor não foram definidas!");
            }else if(typeof routes !== "object") {
                throw new Error("O método routes() deve receber uma array com as rotas do servidor.");
            }

            for(let route of routes) {
                server.use(route);
            } 
        }
        catch (err) {
            let errorMessage = `Erro no servidor: ${err.message}`;

            if(err.message == "app.use() requires a middleware function") {
                errorMessage = "Alguma rota não está definida corretamente ou não é uma rota."
            }

            console.error(errorMessage);
            return errorMessage;
        }
    }

    /*Obs: Por ser apenas um projeto challange para a Alura, a 
    configuração do CORS foi projetada para ser passada diretamente como parâmetro,
    sem nenhum tratamento de dados. Em um projeto real e profissional, não deixaria
    isso passar.*/

    //Configuração do CORS
    async configCors(cors) {
        try {
            server.use(cors);
        }
        catch (err) {
            let errorMessage = `Erro no servidor: ${err.message}`;

            console.error(errorMessage);
            return errorMessage;
        }
    }
}

module.exports = new Server;