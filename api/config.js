const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Client } = require("pg");
const session = require("express-session");
const crypto = require("crypto");
const secretKey = crypto.randomBytes(32).toString("hex");
require("dotenv").config({ path: "../.env" });
const app = express();
const port = process.env.API;

const client = new Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

client.connect();

app.use(
  session({
    secret: secretKey,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(bodyParser.json());
app.use(cors());

//Importamos las peticiones
const loginRouter = require("./server/Login");
const signUpRouter = require("./server/SignUp");
const updateUser = require("./server/updateUser");
const updatePassword = require("./server/updatePassword");
const deleteUser = require("./server/DeleteUser");

app.use("/login", loginRouter);
app.use("/signup", signUpRouter);
app.use("/:username/update", updateUser);
app.use("/:username/password/update", updatePassword);
app.use("/:username/delete", deleteUser);

app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
