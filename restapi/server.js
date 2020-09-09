const express = require('express');
const { ROUTE_CONTSTANTS } = require('./helpers/route_constants');
const app = express();
//route, callback function.
app.get(ROUTE_CONTSTANTS.DEFAULT,function (req,res){
    res.send("<h1>Welcome to Pega");
});

app.get(ROUTE_CONTSTANTS.GET_LOGIN,function (req,res){
    res.sendFile(__dirname+'/pages/login.html')
});

app.get(ROUTE_CONTSTANTS.GET_REGISTER,function (req,res){
    res.send("<h1>Register Page</h1>");
});

app.get(ROUTE_CONTSTANTS.GET_PRODUCTS,function (req,res){
    res.send("<h1>Products Page</h1>");
});
app.listen(3000);