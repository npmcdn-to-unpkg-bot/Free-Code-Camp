var path = require('path'),
	express = require('express'),
	app = express(),
	port = process.env.PORT || 8000,
	MongoClient = require('mongodb').MongoClient,
	urlList = require('./schema.js'),
	//To get the data submitted in the body of the POST request, we will use a middleware called body-parser, we can install it via NPM:
	bodyParser = require('body-parser');
	app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
var db;
var coll;
MongoClient.connect('mongodb://joechimienti:Freewill89!@ds031915.mlab.com:31915/hello-world', function(err, database){
	if (err) throw err;
	db = database;
// coll = db.collection('shortenURL') // could not connect to coll
	
});
app.listen(port, function(){
		console.log('mongo ' + port);
	});
//Display homepage	
app.get('/', function(req, res){
	var fileName = path.join(__dirname, 'public', 'index.html');
	res.sendFile(fileName, function(err){
		if (err) {
			console.log(err);
			res.status(err.status)
			.end();
		}else{
			console.log('sent: ', fileName);
		}	
	});
});
app.get('/newURL/*?', function(req, res){
	var validURL = require('valid-url');
	//userURL = req.url.substr();
	var theURL = req.params[0];
	if(theURL && validURL.isUri(theURL)){
		urlList.find({url: theURL}, function(err, docs){
			if(err) throw err;
			if (docs && docs.length){
				res.status(201).json({
					'original-url': theURL,
					'short-url': 'fcc-joechimienti.c9users.io/' + docs[0].id
				});
			}
		});
	
		urlList.create({url: theURL}, function(err, myURL){
		if(err) {
			console.log(err);
		}	
		return res.status(201).json({
			'original-url': theURL,
			'short-url': 'fcc-joechimienti.c9users.io/' + myURL.id
		});
	});
} else{
	res.status(400).json({
		
		error: 'url invalid',
		
	});
}
});


