var fs = require('fs'),
    path = require('path');
module.exports = function(dir, ext, callback){
	fs.readdir(dir, function(err, files){
		if (err) return callback(err);
		var output = [];
		files.forEach(function(file){
			if (path.extname(file) === '.' + ext){
				output.push(file);
			}
		});
		callback(null, output);
	});
}
