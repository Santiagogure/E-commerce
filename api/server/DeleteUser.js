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

router.delete("/:username/delete", (req, res) => {
  const { username } = req.params;

  client.query(
    "DELETE FROM users WHERE username = $1",
    [username],
    (error, results) => {
      if (error) {
        throw error;
      }

      if (results.rowCount > 0) {
        res.status(200).json({ message: "User has been eliminated" });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    }
  );
});

module.exports = router;
