var path = require('path'),
	express = require('express'),
	app = express(),
	port = process.env.PORT || 8000,
	base58 = require('./base58.js'),
	MongoClient = require('mongodb').MongoClient,
	//To get the data submitted in the body of the POST request, we will use a middleware called body-parser, we can install it via NPM:
	bodyParser = require('body-parser');
	app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
var db;
var coll;
MongoClient.connect('mongodb://joechimienti:<pass>@ds031915.mlab.com:31915/hello-world', function(err, database){
	if (err) throw err;
	db = database;
// coll = db.collection('shortenURL') // could not connect to coll
	app.listen(port, function(){
		console.log('mongo ' + port);
	});
});
app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
	res.end();
});
app.get('/url/*', function(req, res){
	var userURL = req.url.substr();
	coll.findOne({short: userURL});
	res.redirect();
})
app.post('/*', function(req, res){
	// get req.url from form
	console.log(req.body.url);
	var newUrl = req.body.url;
    var dec = base58.decode(newUrl);
	
	 coll = db.collection('shortenURL')

   coll.insert({
            url: newUrl,
	    short: dec
   });
   db.close();
   res.send('shortened url is: http://www.example.com/' + dec);
   
});

