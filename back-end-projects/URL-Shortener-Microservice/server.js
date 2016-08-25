var mongo = require('mongodb').MongoClient,
express = require('express'),
app = express(),
path = require('path'),
bodyParser = require('body-parser');
app.use(express.static(path.join(__dirname, 'public')));
var port = process.env.PORT || 31915;
mongo.connect('mongodb://joechimienti:Freewill89!@ds031915.mlab.com:31915/hello-world', function(err, database){
	if (err) throw err;
	db = database;
// coll = db.collection('shortenURL') // could not connect to coll
	
	
});
app.get('/', function(req, res){
		res.sendFile(path.join(__dirname, 'public', 'index.html'))
	});
	app.post('/*', function(req, res){
		console.log(req.url);
	})
	app.listen(port);