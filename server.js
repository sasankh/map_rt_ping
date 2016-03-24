var express = require('express'); //declaring express
var app = express(); //assigning express to app
var bodyParser = require('body-parser'); //declaring body parser
var serverFunction = require('./function_modules/serverSideFunction'); // importing the serverside function module

app.use(express.static(__dirname + "/public"));  // asking express to use the folder
app.use(bodyParser.json());  //asking express to use the body parser

//server ports
app.listen(4000);    //asking express to use port 3000

//server side function
app.get('/retriveLocation', serverFunction.retriveLocation);   // get one data ---> retrive one data from collection
