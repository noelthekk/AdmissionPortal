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
  database: "admissionPortal",
});
app.post("/login", (req, res) => {
  console.log(req.body);
  const registerNumber = req.body.registerNumber;
  const password = req.body.candidatePasssword;
  db.query("INSERT INTO accounts (Register_num, password) VALUES (?, ?) ",
  [registerNumber, password], (err, result) => {
    if(err) {
      console.log(err);
    } else {
      console.log("no probss");
    }
  });
});
 
// if (loggedIn) {
//   console.log("Success!");
//   res.redirect("/UserHomePage");
// } else {
//   console.log("Error!");
// }

// app.post("/auth", function (req, res) {
//   let registerNumber = req.body.registerNumber;
//   let password = req.body.password;
//   if (registerNumber && password) {
//     connection.query(
//       "SELECT * FROM accounts WHERE registerNumber = ? AND password = ?",
//       [registerNumber, password],
//       function (error, results, fields) {
//         if (error) throw error;
//         if (results.length > 0) {
//           req.session.loggedin = true;
//           req.session.registerNumber = registerNumber;
//           res.redirect("/home");
//         } else {
//           res.send("Incorrect registerNumber and/or Password!");
//         }
//         res.end();
//       }
//     );
//   } else {
//     res.send("Please enter registerNumber and Password!");
//     res.end();
//   }
// });

app.listen(3001, () => {
  console.log("Yey, your server is running");
});
