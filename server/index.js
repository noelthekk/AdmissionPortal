const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "362394",
  database: "admission",
});

app.post("/create", (req, res) => {
  const sslcScheme = req.body.sslcScheme;
  const registerNumber = req.body.registerNumber;
  const monthPass = req.body.monthPass;
  const yearPass = req.body.yearPass;
  const dateOfBirth = req.body.dateOfBirth;
  const nummber = req.body.nummber;
  const modeOfApplication = req.body.modeOfApplication;

  db.query(
    "INSERT INTO employees (sslcScheme, registerNumber, monthPass, yearPass, dateOfBirth, nummber, modeOfAPplication) VALUES (?,?,?,?,?,?,?)",
    [sslcScheme, registerNumber, monthPass, yearPass, dateOfBirth, nummber, modeOfApplication ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});
