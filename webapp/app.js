//to work with http protocol we will use http module.

var http = require('http');

var requestListner = function (req, res) {
    if(req.url=='/register'){

        res.writeHead(200);
        res.end("<h1>I am registration page of  Pega Systems</h1><input type='text'/>")
    }
    else{
    res.writeHead(200);
    res.end("<h1>Welcome to Pega Systems</h1><input type='text'/>")
    }
};

var server = http.createServer(requestListner);

server.listen("3000");