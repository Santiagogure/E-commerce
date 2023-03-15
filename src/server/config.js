const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { Client } = require("pg");
const session = require("express-session");
const crypto = require("crypto");

const secretKey = crypto.randomBytes(32).toString("hex");

require("dotenv").config({ path: "../../.env" });

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

// Ruta para iniciar sesión
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  client.query(
    "SELECT * FROM users WHERE username=$1 AND password=$2",
    [username, password],
    (error, results) => {
      if (error) {
        throw error;
      }

      if (results.rows.length > 0) {
        req.session.username = username;
        req.session.password = password;
        res.status(200).json({ username: username, password: password });
      } else {
        res.status(401).json({ message: "Credenciales inválidas" });
      }
    }
  );
});

// Ruta para registrar un nuevo usuario
app.post("/signup", (req, res) => {
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

// app.post("/signup", (req, res) => {
//   const { username, password } = req.body;

//   client.query(
//     "SELECT * FROM users WHERE username=$1",
//     [username],
//     (error, results) => {
//       if (error) {
//         throw error;
//       }

//       if (results.rows.length > 0) {
//         const user = results.rows[0];
//         bcrypt.compare(password, user.password, (err, result) => {
//           if (err) {
//             throw err;
//           }

//           if (result) {
//             req.session.username = username;
//             req.session.password = password;
//             res.status(200).json({ message: "Inicio de sesión exitoso" });
//           } else {
//             res.status(401).json({ message: "Credenciales inválidas" });
//           }
//         });
//       } else {
//         res.status(401).json({ message: "Credenciales inválidas" });
//       }
//     }
//   );
// });

//Ruta para actualizar un usuario

app.put("/users/:username/username", (req, res) => {
  const { username } = req.params;
  const newUsername = req.body.username;

  client.query(
    "UPDATE users SET username = $1 WHERE username = $2",
    [newUsername, username],
    (error, results) => {
      if (error) {
        throw error;
      }

      if (results.rowCount >= 0) {
        res.status(200).json({ message: "Username actualizado exitosamente" });
      } else {
        res.status(404).json({ message: "Usuario no encontrado" });
      }
    }
  );
});

app.put("/users/:username/password", (req, res) => {
  const { username } = req.params;
  const newPassword = req.body.password;

  client.query(
    "UPDATE users SET password = $1 WHERE username = $2",
    [newPassword, username],
    (error, results) => {
      if (error) {
        throw error;
      }

      if (results.rowCount > 0) {
        res.status(200).json({ message: "Password actualizado exitosamente" });
      } else {
        res.status(404).json({ message: "Usuario no encontrado" });
      }
    }
  );
});

app.delete("/users/:username/delete", (req, res) => {
  const { username } = req.params;

  client.query(
    "DELETE FROM users WHERE username = $1",
    [username],
    (error, results) => {
      if (error) {
        throw error;
      }

      if (results.rowCount > 0) {
        res.status(200).json({ message: "Usuario eliminado exitosamente" });
      } else {
        res.status(404).json({ message: "Usuario no encontrado" });
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
