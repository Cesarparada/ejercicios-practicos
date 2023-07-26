const fs = require("fs");


function readFile (cb){
fs.readFile('./datos.txt', 'utf-8', function (err, data){
if (err) throw err

cb(data)
})
}

readFile(function (data) {
  console.log(data)
})