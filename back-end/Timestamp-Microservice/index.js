var express = require('express'),
app = express(),
path = require('path'),
moment = require('moment'),
port = process.env.PORT || 8000;
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
}); 
app.get('/[a-z]|[A-Z]*', function(req, res){
	var pathz = req.path.replace(/(st|rd|nd|th|%20)/g, ' ').substr(1);
	//http://stackoverflow.com/questions/23263380/deprecation-warning-moment-construction-falls-back-to-js-date
	var datez = new Date(pathz);
	var d = moment(datez)
	console.log(date);
	if ( d.isValid()){
		var unix = d.format('x')
		var natural = d.format('MM-DD-YYYY')
		var date = {
			'natural': natural,
			'unix': unix
		};
		 return res.send(date).end();
	}
		res.send('Invalid date format').end();
	}
});
app.get('/[0-9]*', function(req, res){
	var p = Number(req.path.substr(1));
	var d = moment(p)
	if ( d.isValid()){
		var unix = d.format('x')
		var natural = d.format('MM-DD-YYYY')
		var date = {
			'natural': natural,
			'unix': unix
		};
		 return res.send(date).end();
	}else{
			res.send('Invalid date format').end();
	}
});
app.listen(port, function(){
	console.log('listening at port ', port)
});
