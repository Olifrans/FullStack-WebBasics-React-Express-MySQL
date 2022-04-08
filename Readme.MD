

# Problemas no andamento do projetos

1 - Usando o Yarn como gerenciamento de pacotes o projeto evoluio, já com o NPM houve centenas de erros cabuloso.


## BackEnde na pasta (server) criar o projeto 
yarn init (enter em todos)
### Instalar as bibliotecas:
yarn add express joi cors moment nodemon mysql

yarn add express
yarn add joi
yarn add cors
yarn add moment
yarn add nodemon
yarn add mysql

### Corrigindo erro de conexão do MySQL
code:'ER_NOT_SUPPORTED_AUTH_MODE', errno:1251, sqlMessage:'Client does, not support authentication protocol requested by server; consider upgrading MySQL client', sqlState: '08004', fatal: true

Você tem que reconfigurar o MySQL Server. para isso siga estes passos.
1= Abra o mysql intsaller.
2- Clique em Reconfigurar (no servidor mysql esquerdo).
3- Vá para a guia Método de autenticação (clicando em Avançar duas vezes.).
4- Em seguida, selecione o botão de opção Use Legacy Authentication Method . Clique em Avançar.
5- Digite sua senha. Clique em Verificar. Vá para Aplicar configuração (clicando em Avançar duas vezes).
6- Clique em Executar . Então Finalize.




## FrontEnde na client (server) criar o projeto
npx create-react-app .

### Instalar as bibliotecas:
yarn add express joi cors moment nodemon mysql

yarn add express
yarn add joi
yarn add cors
yarn add moment
yarn add nodemon
yarn add mysql






## Na pasta (server) criar o projeto back-end:
npm init (enter em todos)

### Instalar as bibliotecas:
yarn add express cors mysql2
yarn add nodemon
yarn add cors


### Criar DB-Mysql no Workbench

### Instalar pacote sequelize:
yarn add sequelize sequelize-cli

### inicializar o sequelize
sequelize init

### O comando sequelize init, vai criar alguma pastas
Delete as pastas (migrations e seeders)



## Na pasta (client) criar o projeto front-end:
executar o comando --> npx create-react-app .

### Instalar as bibliotecas:

yarn add react-bootstrap react-router-dom react-cookie moment axios react-helmet

yarn add react-bootstrap bootstrap
yarn add react-bootstrap
yarn add react-router-dom
yarn add react-cookie
yarn add moment
yarn add axios
yarn add react-helmet




Continuar estudo na posição: 18:00
https://www.youtube.com/watch?v=4JNbKumPMHI&list=PLSP81gW0XjNEEzKShqQ5iozDaVeqIjzpP&index=4