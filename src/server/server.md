# Documentação do objeto Server
Server é o objeto do servidor - Todas as funcionalidades e expecificações do servidor estão em Server

- #### Método on()
O método "on()" inicia o servidor e possui dois parâmetros: port e callback.
parâmetro port: define a porta em que o servidor estará escutando. Ex: Server.on(8080);
parâmetro callback: define a mensagem que será exibida no terminal assim que o servidor estiver rodando;

##### Observação: Por padrão, a mensagem de callback é "Servidor iniciado".

- #### Método routes()
O método "routes()" define todas as rotas (endpoints) do servidor/API, deve-se passar como parâmetro uma array com todas as rotas. Ex: Server.routes([rota1, rota2, rota3]);

- #### Método configCors()
O método "configCors" define a configuração do CORS.
Deve-se passar como parâmetro a configuração do cors padrão.

- Syntax: Server.use(cors( configuração padrão do cors ))

##### Observação: Por ser apenas um projeto de challange para a Alura, não foi criado nenhum tratamento de dados para esta funcionalidade, nada muito complexo. Em um projeto real e profissional, obviamente, não deixaria isso passar.