var express = require("express");
var app = express();
var database = require("../config/database");
var authValidations = require("../validations/auth");




//POST - Para lidar com autenticação dos usuários
app.post("/authenticate", (req, res) => {
  //Get decript email e senha
  let requestBody = getCredentialsFromHeaders(req);

  //Validação do login usando a biblioteca - Joi validador de dados para JavaScript
  const { error } = authValidations(requestBody);

  if (error) {
    res.json({
      id: "",
      message: error.details[0].message,
    });
  } else {
    let sql = `SELECT id FROM users WHERE email = '${requestBody.email}' AND password = '${requestBody.password}'`;

    database.query(sql, (err, result) => {
      if (err) {
        res.status(400).send(err);
        return;
      }

      if (result.length) res.json(result[0]);
      else
        res.json({
          id: "",
          message: "Usuário ou senha estão incorreto",
        });
    });
  }
});

function getCredentialsFromHeaders(req) {
  //Obtem autorização (base 64)
  let authorization = req.header("authorization");

  //Converter autorização em um array
  let authData = authorization.split(" ");

  //Converter em  UTF-8, compatível com versões anteriores do ASCII.
  let token = Buffer.from(`${authData[1]}`, "base64").toString("utf8");

  //Converter token em array
  let credentials = token.split(":");

  return {
    email: credentials[0],
    password: credentials[1],
  };
}

module.exports = app;
