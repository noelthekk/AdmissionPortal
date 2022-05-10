const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
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
    "INSERT INTO employees (sslcScheme, registerNumber, monthPass, yearPass, dateOfBirth, nummber, modeOfAPplication) VALUES (?,?,?,?,?)",
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

app.get("/employees", (req, res) => {
  db.query("SELECT * FROM student", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/update", (req, res) => {
  const id = req.body.id;
  const nummber = req.body.nummber;
  db.query(
    "UPDATE student SET nummber = ? WHERE id = ?",
    [nummber, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM student WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});
