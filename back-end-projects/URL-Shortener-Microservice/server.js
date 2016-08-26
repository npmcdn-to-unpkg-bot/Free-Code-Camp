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
app.get('/', function(req, res){
	res.send(path.join(__dirname, 'public', 'index.html'));
});
app.get('/new/*', function( req, res){ 
var urlz = req.url;
console.log('req.params.url', urlz.substr(8));
 var validUrl = require('valid-url');
    if (validUrl.isUri(req.url.substr(8))){
        console.log('Looks like an URI');
		var obj = {
		  enteredUrl: encodeURI(urlz.substr(5)),
		  short: shorten() 
		};
		console.log('obj to send: ', obj);
		res.json(obj);
	    coll.insertOne({
		  obj
	      },  function(err){
		     if (err) throw err;
	    });
    } else {
        console.log('Not a URI');
		res.send('Not a URI my dude');
    }
	

});
app.get('/:id', function(req, res){
	console.log(req.params.id);
var u = coll.find({"obj.short": req.params.id}).toArray(function(err, documents){
	var a = documents[0].obj.enteredUrl;
	console.log(a);
	res.redirect(a);
});	
})
app.listen(port, function(err){
	if (err) throw err;
	console.log(port);
});