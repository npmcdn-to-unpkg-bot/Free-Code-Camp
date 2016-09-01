
var API_KEY = process.env.API_KEY;
var cx = '007471495301481402097:_hffddgxiva';
var request = require('request');
var port = process.env.PORT || 8000;
var mongo = require('mongodb').MongoClient;
var URI = process.env.MONGO_URI;
var express = require('express'),
 app = express() ,
 path = require('path');
 var d, coll;
 var helmet = require('helmet');
 app.use(helmet());
mongo.connect(URI, function(err, db){
	if (err) throw err;
	d = db;
	coll = db.collection('image-search');
	console.log('connected to db');
})
 app.get('/api/imagesearch/:q', function(req, res){
 	var offset = req.query.offset;
 	var query = req.params.q;
  	var realUrl = 'https://www.googleapis.com/customsearch/v1?key=' + 
   		API_KEY + '&cx=' + cx + '&q=' + query + '&searchType=image&' + 
   		'fileType=jpg&imgSize=xlarge&alt=json&num=' + offset;
 	request(realUrl, function(err, response, body){
 		if (err) throw err;
 		var obj = JSON.parse(body);
 		var items = obj.items;
        var r = [];
        var searchInfo = {
        	term: query,
        	when: Date.now()
        };
        coll.insertOne(searchInfo, function(err, doc){
        	if (err) throw err;
        	console.log(doc.ops);
        });
        items.forEach(getPhotos);
        function getPhotos(item){
        	r.push({
        		title: item.title,
        		snippet: item.snippet,
        		link: item.link
        	});
        }
       res.send(r);
 	})
    
 });
app.get('/api/latest/imagesearch', function(req, res){
	var  lat = coll.find({}, {_id: 0})
	  .skip(coll.count() - 10).limit(10)
	  .sort({when: -1});
	var l = lat.toArray(function(err, docs){
		if (err) throw err;
		console.log(docs);
		res.send(docs)
	})
	//console.log('LAT', lat);
});
app.listen(port, function(){
	console.log('listening at port', port)
})
