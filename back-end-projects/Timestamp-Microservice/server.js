var express = require('express'),
app = express(),
path = require('path'),
moment = require('moment');
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
}); 
app.get('/*', function(req, res){
	var newPath = req.path.replace(/(st|rd|nd|th|%20)/g, ' ').substr(1);
	//http://stackoverflow.com/questions/23263380/deprecation-warning-moment-construction-falls-back-to-js-date
	var date = new Date(newPath);
	var d = moment(date)
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
	
	
	
})
app.listen(8000, function(){
	console.log('listening at port ', 8000)
})