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
app.listen(port, function(err){
	if (err) throw err;
	console.log(port);
});
// NOTE: app works w/o homepage explicit call 
// guess due to express settings 
app.get('/', function(req, res){
	res.send(path.join(__dirname, 'public', 'index.html'));
	console.log('home page');
});

app.get('/:id', function(req, res){
	console.log('in app.get :id where id=', req.params.id);
	var u = coll.find({short: req.params.id}).toArray(function(err, documents){
		console.log(documents);
		if (documents.length){
			return res.redirect(documents[0].enteredUrl)
		}
		res.end('Sorry not found');
	});	
});
app.get('/new/*', function( req, res){ 
	var urlz = req.url.substr(5);
	var d = [];
	console.log('req.params.url', urlz);
 	var validUrl = require('valid-url');
    if (validUrl.isUri(urlz)){
	var obj = {
	  enteredUrl: encodeURI(urlz),
	  short: shorten() 
	};
	coll.find({enteredUrl: urlz})
	.toArray(function(err, docs){
		if (err) throw err;
		console.log('DOCS.LENGTH:', docs.length, 'DOCS', docs);
		if (!docs.length){
			coll.insert(obj, function(err, data){
				if (err) throw err;
				console.log('OBJECT TO INSERT: \n', obj);
				console.log('DATA INSERTED: \n', JSON.stringify(data))
				return res.json(obj);
			});
		}else{
			res.json({
				enteredUrl: obj.enteredUrl,
				short: docs[0].short
			});
		}
	}
	);
	}else{
	    	res.end('No URI');
	}	
});


/*
app.get('/favicon.ico', function(req, res){
	res.sendStatus(200);
	console.log('fav icon requested');
});

app.get('*[object%20HTMLInputElement]*', function(req, res, next){
	res.sendStatus(200);
	console.log('html input', req.url)
	

});
*/
