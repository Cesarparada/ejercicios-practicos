// Ejercicio 3 (Utilice una api de rick and morty para la petición)

const axios = require("axios");


const urls = [
  "https://rickandmortyapi.com/api/character/1",
  "https://rickandmortyapi.com/api/character/2",
  "https://rickandmortyapi.com/api/character/3",
  
];

Promise.all(urls.map(axios.get)).then((new_urls) => {
  new_urls.forEach((result) => {
    console.log(result.data.name);
  });
});
