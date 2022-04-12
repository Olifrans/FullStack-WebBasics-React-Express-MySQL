

# Principal problema no andamento do projeto foi usar o NPM.
1 - Usando o Yarn como gerenciamento de pacotes o projeto evoluio, já com o NPM houve centenas de erros cabuloso.

## BackEnd na pasta (server) criar projeto 
yarn init (enter em todos)
### Instalar as bibliotecas:
yarn add express joi cors moment nodemon mysql

yarn add express
yarn add joi
yarn add cors
yarn add moment
yarn add nodemon
yarn add mysql

### Criar DB-Mysql e tabelas usando Workbench --> ferramenta visual de design de banco de dados  Mysql.

# Problema encontrado com relação a versão do MySQL erro de conexão: 
code:'ER_NOT_SUPPORTED_AUTH_MODE', errno:1251, sqlMessage:'Client does, not support authentication protocol requested by server; consider upgrading MySQL client', sqlState: '08004', fatal: true
#### Como solucionar:
Você tem que reconfigurar o MySQL Server. para isso siga estes passos.
1= Abra o mysql intsaller.
2- Clique em Reconfigurar (no servidor mysql esquerdo).
3- Vá para a guia Método de autenticação (clicando em Avançar duas vezes.).
4- Em seguida, selecione o botão de opção Use Legacy Authentication Method . Clique em Avançar.
5- Digite sua senha. Clique em Verificar. Vá para Aplicar configuração (clicando em Avançar duas vezes).
6- Clique em Executar . Então Finalize.



## FrontEnd na pasta (client) criar o projeto de interface do usuario
npx create-react-app .
### Instalar as bibliotecas:
yarn add react-bootstrap react-router-dom react-cookie moment axios react-helmet


yarn add react-bootstrap bootstrap
yarn add react-bootstrap
yarn add react-router-dom
yarn add react-cookie
yarn add moment
yarn add axios
yarn add react-helmet

Corrigir erro Bootstrap:
yarn add bootstrap

yarn add env-cmd
Obs: Alterar o start do arquivo (package.json) para apontar o arquivo (.env.local):
"start": "react-scripts start",
Para --> "start": "env-cmd -f .env.local react-scripts start",


## Usei o Live Sass Compiler para compilar/transpilar os arquivos SASS/SCSS para arquivos CSS em tempo real.
Procedimento para usar a extensão:
1 - Excluir do projeto na pasta (src) o arquivo (App.css).
2 - Criei uma pasta (css) dentro da  pasta o arquivo (App.scss).
3 - Instalei a ativei a extensão (Live Sass Compiler) no VsCode.
4 - Na barra inferior do VsCode executei o atalho da extensão (Live Sass Compiler --> Watch Sass) para ficar escutando as alterações no  o arquivo (App.scss).
5 - Com este processo automaticamente será criado os arquivos (App.css - e - App.css.map)
