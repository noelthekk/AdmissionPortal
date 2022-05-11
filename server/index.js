const express = require("express");
const app = express();
const mysql = require("mysql");
var bodyparser = require("body-parser");

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Rjm@58xyz",
  database: "admissionportal",
  port:3306
});

app.post("/home", (req, res) => {
  const sslcScheme = req.body.sslcScheme;
  const registerNumber = req.body.registerNumber;
  const monthPass = req.body.monthPass;
  const yearPass = req.body.yearPass;
  const dateOfBirth = req.body.dateOfBirth;
  const nummber = req.body.nummber;
  const modeOfApplication = req.body.modeOfApplication;

  db.query(
    "INSERT INTO student (sslcScheme, registerNumber, monthPass, yearPass, dateOfBirth, nummber, modeOfApplication) VALUES (345780,'SSLC (2020-2021)','January','2021',1999-10-10,'6935632463','aa')",
    // [sslcScheme, registerNumber, monthPass, yearPass, dateOfBirth, nummber, modeOfApplication ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.post("/auth", function (req, res) {
  console.log(req.body);
  let registerNumber = 123456;
  let password = 123456;

  if (true) {
    db.query(
      "SELECT * FROM accounts WHERE username = ? AND password = ?",[registerNumber, password],
      
      function (error, results, fields) {
        if (error) throw error;
        if (results.length > 0) {
          
          console.log(results);
          res.redirect("/home");
        } else {
          res.send("Incorrect registerNumber and/or Password!");
        }
        res.end();
      }
    );
  } else {
    res.send("Please enter registerNumber and Password!");
    res.end();
  }
});

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});
