var mongo = require('mongodb').MongoClient,
	express = require('express'),
	app = express(),
	path = require('path'),
	port = process.env.PORT || 31915,
	username = require('./config.js').username,
	password = require('./config.js').password,
	shorten = require('./shortenUrl.js'),
	coll, 
	 db;
app.use(express.static(path.join(__dirname, 'public')));
mongo.connect('mongodb://' + username + ':' + password + '@ds031915.mlab.com:31915/hello-world',
   function(err, database){
		if (err) throw err;
		db = database;
		coll = db.collection('shorten-url') ;
	}
);
app.post('/*', function(req, res){
	console.log(req.url);
	var obj = {
		url: req.url,
		short: shorten
	}
	coll.update({
		obj
	}, function(err){
		if (err) throw err;
	});
});
app.get('/new/:url*', function(req, res){
		var output = {
			url: req.params.url,
			short: 'hello'
		}
		res.send(output);
});
app.listen(port, function(err){
	if (err) throw err;
	console.log(port);
});