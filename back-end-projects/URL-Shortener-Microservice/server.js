var path = require('path'),
	express = require('express'),
	app = express();
app.use(express.static(path.join(__dirname, 'public')))
app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.post('/*', function(req, res){
	console.log(req.url)
})

app.listen(port, function(){
	console.log('listening at port ' + port)
})