var mongo = require('mongodb').MongoClient,
	express = require('express'),
	app = express(),
	path = require('path'),
	port = process.env.PORT || 5000,
    helmet = require('helmet'),

	username = process.env.USERNAME,//require('./config.js').username,
	password = process.env.PASSWORD,//require('./config.js').password,
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


app.get('/new/*', function( req, res){ 
	console.log('in app.get/NEW', req.url)
	
	if (req.url === '/favicon.ico' || '*[object* || *ject*'){
		console.log('fav icon, object', req.url)
		
	}

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
		coll.insert(obj, {'obj.enteredUrl': 1, 'obj.short': 1}, function(err, data){
		if (err) throw err;
		console.log(JSON.stringify(data))
		    db.close();

		});
		res.json(obj).end();
		return;
	}
    res.send('No URI');
    res.end();
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



