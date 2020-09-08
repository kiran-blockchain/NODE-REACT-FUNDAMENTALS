var file = require('fs');
file.appendFileSync("./demo.txt","Kiran1234");


var dataFromFile = file.readFileSync('./demo.txt',{encoding:'utf-8'});
console.log(dataFromFile)
