const express = require("express");
const app = express();
const mysql = require("mysql");


const db = mysql.createConnection({
  user: "root",
  host: "local",
  password: "362394",
  database: "admissionPortal",
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
  let registerNumber = req.body.registerNumber;
  let password = req.body.password;
  if (registerNumber && password) {
    connection.query(
      "SELECT * FROM accounts WHERE registerNumber = ? AND password = ?",
      [registerNumber, password],
      function (error, results, fields) {
        if (error) throw error;
        if (results.length > 0) {
          req.session.loggedin = true;
          req.session.registerNumber = registerNumber;
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
  console.log("Yey, your server is running on port 3000");
});
