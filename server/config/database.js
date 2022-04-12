

const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ms161719",
  database: "olifrans-api",
});

module.exports = con;



