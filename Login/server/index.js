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
 //end of app.post()
app.post("/login", (req, res) => {
  console.log(req.body);
  const regNum = req.body.registerNumber;
  const password = req.body.candidatePasssword;
  db.query("SELECT registerNumber from login WHERE registerNumber =  and candidatePassword = 'test'",
  (err, result) => {
    if(result.length = 0) {
      console.log(err);
      console.log("hello");
      console.log(result[0]);
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
