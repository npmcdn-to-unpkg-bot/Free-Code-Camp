var os = require('os'),
	express = require('express'),
	app = express();

var port = process.env.PORT || 8000;
app.get('/', function(req, res){
	var release = os.release()
	var type = os.type()
	var language = req.acceptsLanguages()
	var ip = req.ip
	var info = [].concat(ip, type, release, language)
	var jsonData = JSON.stringify(info, null, '\t')
	//res.send(jsonData)
	res.send(info)
})

app.listen(port, () =>{
	console.log('listening at port ' + port)
});

	