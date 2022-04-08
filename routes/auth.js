var express = require("express");
var app = express();
var database = require("../config/database");

//POST
app.post("/authenticate", (req, res) => {
  let requestBody = getCredentialsFromHeaders(req);
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
