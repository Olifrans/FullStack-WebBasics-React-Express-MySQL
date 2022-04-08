

# Problemas no andamento do projetos

1 - Usando o Yarn como gerenciamento de pacotes o projeto evoluio, já com o NPM houve centenas de erros cabuloso.


## Na pasta (server) criar o projeto back-end:
npm init (enter em todos)
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

1= Abra o mysql intsaller .

2- Clique em Reconfigurar (no servidor mysql esquerdo)

3- Vá para a guia Método de autenticação (clicando em Avançar duas vezes.)

4- Em seguida, selecione o botão de opção Use Legacy Authentication Method . Clique em Avançar.

5- Digite sua senha. Clique em Verificar. Vá para Aplicar configuração (clicando em Avançar duas vezes).

6- Clique em Executar . Então Finalize.
É isso. Divirta-se Hackeando!!

