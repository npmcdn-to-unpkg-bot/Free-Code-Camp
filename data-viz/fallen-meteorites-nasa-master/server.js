var http = require('http');
var fs = require('fs');
var path = require('path');
var express = require('express');
var app = express();

app.use(express.static('./public'));
app.get('/', function(req, res){
	console.log('main page');
	
}).listen(8000);