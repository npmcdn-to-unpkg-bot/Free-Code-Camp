var fs = require('fs'),
    path = require('path'),
    folder = process.argv[2],
    ext = '.' + process.argv[3];
fs.readdir(folder, function(err, files){
	if (err) throw err
	files.forEach(function(file){
		if (path.extname(file) === ext){
			console.log(file)
		}
	});
});
