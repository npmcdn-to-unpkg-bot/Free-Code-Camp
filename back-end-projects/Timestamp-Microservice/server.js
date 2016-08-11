var express = require('express'),
	app = express(),
	moment = require('moment');
app.use(express.static('./public'))
app.get('/', function(req, res){
	res.sendFile('./public/index.html')
})	
app.get('/*', function(req, res){
	var newPath = req.path.replace(/(st|rd|nd|th|%20)/g, ' ').substr(1);
	//http://stackoverflow.com/questions/23263380/deprecation-warning-moment-construction-falls-back-to-js-date
	var date = new Date(newPath);
	var d = moment(date)
	if ( d.isValid()){
		var unix = d.format('x')
		var natural = d.format('MM-DD-YYYY')
		var date = {
			natural,
			unix
		}
		 return res.send(date);
	}
	res.send('Invalid date format');
	
	
})

var port = process.env.PORT || 8000

app.listen(port, () =>{
	console.log('listening at port ', port)
})