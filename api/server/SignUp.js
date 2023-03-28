const express = require("express");
const router = express.Router();
const { Client } = require("pg");
const session = require("express-session");
const crypto = require("crypto");

const secretKey = crypto.randomBytes(32).toString("hex");

require("dotenv").config({ path: "../.env" });

const client = new Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

client.connect();

router.use(
  session({
    secret: secretKey,
    resave: false,
    saveUninitialized: true,
  })
);

router.post("/signup", (req, res) => {
  const { username, password } = req.body;

  client.query(
    "SELECT * FROM users WHERE username=$1",
    [username],
    (error, results) => {
      if (error) {
        throw error;
      }

      if (results.rows.length > 0) {
        res.status(409).json({ message: "El usuario ya existe" });
      } else {
        client.query(
          "INSERT INTO users (username, password) VALUES ($1, $2)",
          [username, password],
          (error, results) => {
            if (error) {
              throw error;
            }
            console.log(results);
            res
              .status(201)
              .json({ message: "Usuario registrado exitosamente" });
          }
        );
      }
    }
  );
});

module.exports = router;
