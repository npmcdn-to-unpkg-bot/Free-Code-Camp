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
MongoClient.connect('mongodb://joechimienti:Freewill89!@ds031915.mlab.com:31915/hello-world', function(err, database){
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
app.get('/*', function(req, res){
	console.log(req.url)
	// if cannot find create. Is there a mongo function?
	coll.find().limit(1)
	// or coll.findOne({longURL: longURL}, function(err, data){
			if (doc){
				// URL HAS BEEN SHORTENED;
			}else{
				// URL NOT FOUND CREATE A NEW ENTRY
			}
		})
	coll.insert()
	coll.update({
		URL: req.url.substr(1)
		shortenedURL: 
	})
	coll.save(req.body, function(err, result){
		if (err) return console.log(err)
		console.log('saved to db')
	    res.redirect('/')
	}
})


url:
shortenedURL:


