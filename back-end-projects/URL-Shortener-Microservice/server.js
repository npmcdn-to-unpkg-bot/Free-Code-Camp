var path = require('path'),
	express = require('express'),
	app = express(),
	port = process.env.PORT || 8000,
	MongoClient = require('mongodb').MongoClient,
	//To get the data submitted in the body of the POST request, we will use a middleware called body-parser, we can install it via NPM:
	bodyParser = require('body-parser');
	app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')))
var db;
MongoClient.connect('mongodb://joechimienti:password@ds031915.mlab.com:31915/hello-world', function(err, database){
	if (err) throw err
	db = database;
	app.listen(port, function(){
		console.log('mongo ' + port);
	});
});
app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, 'public', 'index.html'))
})
var coll = db.collection('shortenURL')
app.post('/*', function(req, res){
	// get req.url from form
	var url = req.url.substr(1);
	var dec = base58.decode(url) 
   coll.insert({
            url: url,
	    short: dec
   });
})



