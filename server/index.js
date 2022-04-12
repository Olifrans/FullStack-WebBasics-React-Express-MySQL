var express = require("express");
var app = express();
var cors = require("cors");

var database = require("./config/database");
var port = process.env.PORT || 3001;

//Conexão Data Base
database.connect((err) => {
  if (err) throw err;
});

//API compartilha recursos entre as origens
app.use(cors());

//API analise arquivo Json
app.use(express.json());

//API recebe dados do cliente app
app.use(
  express.urlencoded({
    extended: true,
  })
);

//Registro de rotas
app.use("/", [require("./routes/post"), require("./routes/auth")]);

app.listen(port, () => {
  console.log(`Escutando a rota http://localhost:${port}`);
});

// http://localhost:3005/posts - GET, POST
// http://localhost:3005/posts/user/:id - GET
// http://localhost:3005/posts/:id - DELETE
// http://localhost:3005/authenticate - POST for login session
