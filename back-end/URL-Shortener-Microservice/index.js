var mongo = require('mongodb').MongoClient,
	express = require('express'),
	app = express(),
	path = require('path'),
	port = process.env.PORT || 5000,
    helmet = require('helmet'),

	username = process.env.USERNAME,
	password = process.env.PASSWORD,
	shorten = require('./shortenUrl.js'),
	coll, 
	 db;
app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet());

mongo.connect('mongodb://' + username + ':' + password + '@ds031915.mlab.com:31915/hello-world',
   function(err, database){
		if (err) throw err;
		db = database;
		coll = db.collection('shorten-url') ;
		console.log('connected to database');
	}
);
app.get('/', function(req, res){
	res.send(path.join(__dirname, 'public', 'index.html'));
	console.log('home page');
});

app.get('/:id', function(req, res){
	console.log('in app.get :id where id=', req.params.id);
	var u = coll.find({short: req.params.id}).toArray(function(err, documents){
		console.log(documents);
		if (documents.length){
			res.redirect(documents[0].enteredUrl)
			res.end();
			return;
		}else{
			res.end('Sorry not found');
			//return;
		}
	});	
		
	
});
app.get('/new/*', function( req, res){ 
	console.log('in app.get/NEW', req.url)
	var urlz = req.url.substr(5);
	console.log('req.params.url', urlz);
 	var validUrl = require('valid-url');
 
    if (validUrl.isUri(urlz)){
		var obj = {
		  enteredUrl: encodeURI(urlz),
		  short: shorten() 
		};
		console.log('OBJECT TO INSERT: \n', obj);
		coll.insert(obj, {'obj.enteredUrl': 1, 'obj.short': 1}, function(err, data){
		if (err) throw err;
		console.log('DATA INSERTED: \n', JSON.stringify(data))
		});
		res.json(obj);
		return;
	}
    res.end('No URI');
});

app.listen(port, function(err){
	if (err) throw err;
	console.log(port);
});
app.get('/favicon.ico', function(req, res){
	res.sendStatus(200);
	console.log('fav icon requested');
});

app.get('*[object%20HTMLInputElement]*', function(req, res, next){
	res.sendStatus(200);
	console.log('html input', req.url)
	

});