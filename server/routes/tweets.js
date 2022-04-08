var express = require("express");
var app = express();
var database = require("../config/database");
var moment = require("moment");

//GET_All
app.get("/tweets", (req, res) => {
  let sql = "SELECT * FROM tweet";

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
app.get("/tweets/user/:id", (req, res) => {
  let sql = `SELECT * FROM tweet WHERE user_id = ${req.params.id}`;

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
app.post("/tweets", (req, res) => {
  let sql = `INSERT INTO tweet (user_id, content, date_time) VALUES(
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
app.post("/tweets/:id", (req, res) => {
  let sql = `DELET FROM tweet WHERE id = ${req.params.id}`;

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


// http://localhost:3001/tweets - GET, POST
// http://localhost:3001/tweets/user/:id -  GET

// http://localhost:3001/tweets/:id - DELETE
// http://localhost:3001/authenticate - POST login session

module.exports = app;
