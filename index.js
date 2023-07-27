//ejercicio 1 creacion de un servidor HTTP

const http = require("http");
const url = require("url");

//Definimos variables a usar.
const hostname = "127.0.0.1";
const port = 3000;

//Creamos el objeto servidor donde pasamos los dos parámetros.
const server = http.createServer((req, res) => {
  let pathName = url.parse(req.url).pathname;

  if (pathName === "/") {
    res.end("Hola Mundo!!!");
  } else {
    res.end("Pagina no Encontrada");
  }
});

//Activamos nuestro servidor.
server.listen(port, hostname, () => {
  console.log(`Servidor Levantado en http://${hostname}:${port}/`);
});
