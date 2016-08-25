var fs = require('fs'),
    path = require('path'),
    module = require('./module.js');
var output = module(process.argv[2], process.argv[3], function(err, list){
	if (err) return console.error('there was an error', error)
	list.forEach(function(file){
		console.log(file);
	});
});
