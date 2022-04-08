


var express = require('express');
var app = express();

var cors = require('cors');
var port = process.env.PORT || 3001;


//Permitir que a API compartilhe recursos entre as origens
app.use(cors());

//Permitir que a API analise arquivo Json
app.use(express.json());

//Permitir que a API receba dados do cliente app
app.use(express.urlencoded({
    extended:true
}));

////Registro de rotas no index.js principal
// http://localhost:3001/tweets - GET, POST
// http://localhost:3001/tweets/user/:id -  GET
// http://localhost:3001/tweets/:id - DELETE
// http://localhost:3001/authenticate - POST login session



app.listen(port, ()=> {
    console.log(`Escutando a rota http://localhost:${port}`);
});

