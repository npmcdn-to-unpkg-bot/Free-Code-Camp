
var base58 = function(alpha) {
    var alphabet = alpha || '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ',
        base = alphabet.length;
    return {
        encode: function(enc) {
            if(typeof enc!=='number' || enc !== parseInt(enc))
                throw '"encode" only accepts integers.';
            var encoded = '';
            while(enc) {
                var remainder = enc % base;
                enc = Math.floor(enc / base);
                encoded = alphabet[remainder].toString() + encoded;        
            }
            return encoded;
        },
        decode: function(dec) {
            if(typeof dec!=='string')
                throw '"decode" only accepts strings.';            
            var decoded = 0;
            while(dec) {
                var alphabetPosition = alphabet.indexOf(dec[0]);
                if (alphabetPosition < 0)
                    throw '"decode" can\'t find "' + dec[0] + '" in the alphabet: "' + alphabet + '"';
                var powerOf = dec.length - 1;
                decoded += alphabetPosition * (Math.pow(base, powerOf));
                dec = dec.substring(1);
            }
            return decoded;
        }
    };
};


var path = require('path'),
	express = require('express'),
	app = express(),
	port = process.env.PORT || 8000,
	//base58 = require('./base58')
	MongoClient = require('mongodb').MongoClient,
	//To get the data submitted in the body of the POST request, we will use a middleware called body-parser, we can install it via NPM:
	bodyParser = require('body-parser');
	app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')))
var db;
MongoClient.connect('mongodb://joechimienti:Freewill89!@ds031915.mlab.com:31915/hello-world', function(err, database){
	if (err) throw err
	db = database;
var coll = db.collection('shortenURL')
	app.listen(port, function(){
		console.log('mongo ' + port);
	});
	db.close();
});
app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.post('/*', function(req, res){
	// get req.url from form
	var url = req.url.substr(1);
	var enc = base58.encode(url) 
   coll.insert({
            url: url,
	    short: enc
   });
})



