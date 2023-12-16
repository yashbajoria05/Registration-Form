const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
  host: "sql12.freesqldatabase.com",
  user: "sql12661534",
  database: "sql12661534",
  password: "7VdGHqUjDY",
});

app.post("/signup", (req, res) => {
  const sql_code =
    "insert into Authentication (`first_name`,`last_name`,`email`,`password`) values (?)";
  const values = [
    req.body.first_name,
    req.body.last_name,
    req.body.email,
    req.body.password,
  ];
  connection.query(sql_code, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/login", (req, res) => {
  const sql_code =
    "SELECT * FROM Authentication WHERE `email` = ? AND `password` = ?";
  connection.query(
    sql_code,
    [req.body.email, req.body.password],
    (err, data) => {
      if (err) return res.json(err);
      else if (data.length > 0) return res.json("Success");
      else return res.json("Failed");
    }
  );
});

app.listen(8080);
