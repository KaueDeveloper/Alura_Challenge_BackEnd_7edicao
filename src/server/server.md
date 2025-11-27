# Documentação do objeto Server
Server é o objeto do servidor - Todas as funcionalidades e expecificações do servidor estão em Server

- #### Método on()
O método "on()" inicia o servidor e possui dois parâmetros: port e callback.
parâmetro port: define a porta em que o servidor estará escutando. Ex: Server.on(8080);
parâmetro callback: define a mensagem que será exibida no terminal assim que o servidor estiver rodando;

::: Observação
Por padrão, a mensagem de callback é "Servidor iniciado".
:::