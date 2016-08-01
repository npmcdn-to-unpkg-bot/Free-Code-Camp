var http = require('http'),
	express = require('express'),
	app = express();
	
app.use(express.static('./public'));

app.get('/', function(req, res){
	res.sendFile('./public/index.html');
}).listen(8000);

