const express = require("express");
const app = express();
const session = require("express-session");
const bodyParser = require("body-parser");

//Definimos variables a usar.
const hostname = "127.0.0.1";
const port = 3000;

////// Ejercicio 4
app.use(
  session({
    secret: "123456",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));

const usuarioLogin = (req, res, next) => {
  if (!req.session.user) {
    res.redirect("/login");
  } else {
    next();
  }
};

app.get("/", (req, res) => {
  res.send(` <h1>Hola Mundo </h1>`);
});
app.get("/login", (req, res) => {
  res.send(` <div class="login-Form">
  <h1>Login</h1>

  <form id="loginForm" method="post" action="/login">
    <label for="name">Nombre del Usuario</label> <br />
    <input
      type="text"
      id="name"
      name="name
    />
    <br />
    <label for="password">Password</label> <br />
    <input
      type="password"
      id="password"
      name="password"
      placeholder="**********"
    />
    <br />
    <br />
    <input type="submit" value="Iniciar Sesión" />
  </form>
</div>`);
});
app.post("/login", (req, res) => {
  const { name, password } = req.body;
  if (req.body.name === "cesar" && req.body.password === "contraseña") {
    req.session.user = name;
    req.session.user = password;
    res.redirect("/dashboard");
  
  } else {
    res.send("El nombre y/o la contraseña con incorrectas");
  }
});

app.get("/dashboard", usuarioLogin, (req, res) => {
  const {} = req.session;
  res.send(`<h1>Bienvenido!</h1><a href="/logout">Cerrar sesión</a>`);
});

//Activamos nuestro servidor.
app.listen(port, hostname, () => {
  console.log(`Servidor Levantado en http://${hostname}:${port}/`);
});
