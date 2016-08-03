var express = require('express'),
	app = express(),
	moment = require('moment');
app.use(express.static('./public'))
app.get('/', function(req, res){
	res.sendFile('./public/index.html')
})	
app.get('/*', function(req, res){
	var newPath = req.path.replace(/(st|rd|nd|th|%20)/g, ' ').substr(1);
	console.log(newPath);
	var d = moment(newPath)
	if ( d.isValid()){
		var unix = d.format('x')
		var natural = d.format('MM-DD-YYYY')
		console.log(unix);
		console.log(natural);
		var date = {
			natural,
			unix
		}
		res.send(date)
	}
	res.send('Invalid date format');
	
	
})

var port = process.env.PORT || 8000

app.listen(port, () =>{
	console.log('listening at port ', port)
})