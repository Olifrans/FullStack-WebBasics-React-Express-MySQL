var express = require("express");
var app = express();
var database = require("../config/database");
var moment = require("moment");




//GET_All ---> não existe
app.get("/posts", (req, res) => {
  let sql = "SELECT * FROM post";

  database.query(sql, (err, result) => {
    if (err) {
      res.status(400).json({
        message: err,
      });
      return;
    }

    if (result.length) res.json(result);
    else res.json({});
  });
});


//GET_ID
app.get("/posts/user/:id", (req, res) => {
  let sql = `SELECT * FROM post WHERE user_id = ${req.params.id}`;

  database.query(sql, (err, result) => {
    if (err) {
      res.status(400).json({
        message: err,
      });
      return;
    }

    if (result.length) res.json(result);
    else res.json({});
  });
});


//POST
app.post("/posts", (req, res) => {
  let sql = `INSERT INTO post (user_id, content, date_time) VALUES (
       '${req.body.user_id}',
       '${req.body.content}',
       '${moment().utc().format("YYY-MM-DD hh:mm:ss")}'
    )`;

  database.query(sql, (err, result) => {
    if (err) {
      res.status(400).json({
        message: err,
      });
      return;
    }
    //Not err
    res.status(200).json({
      status: 200,
      success: true,
    });
  });
});

//DELETE
app.delete("/posts/:id", (req, res) => {
  let sql = `DELETE FROM post WHERE id = ${req.params.id}`;

  database.query(sql, (err, result) => {
    if (err) {
      res.status(400).json({
        status: 400,
        success: false,
      });
    } else {
      res.status(200).json({
        status: 200,
        success: true,
      });
    }
  });
});


// http://localhost:3001/posts - GET, POST
// http://localhost:3001/posts/user/:id -  GET

// http://localhost:3001/posts/:id - DELETE
// http://localhost:3001/authenticate - POST login session

module.exports = app;