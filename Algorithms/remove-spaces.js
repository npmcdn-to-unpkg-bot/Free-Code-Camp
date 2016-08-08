var fs = require('fs'),
	path = require('path'),
	dir = "C:\\Users\\jchimienti\\Desktop\\Free-Code-Camp-Log\\Algorithms\\Advanced Algorithmic Scripting";
fs.readdir(dir, function(err, files){
	if (err) throw err
	files.forEach(function(file){
		var n = file.toLowerCase();
		var newFileName = n.replace(/\s|\_/g, '-');
		console.log(newFileName);
		var oldFilePath = path.join(dir, file);
		var newFilePath = path.join(dir, newFileName);
		console.log(oldFilePath, newFileName);
		
		fs.rename(oldFilePath, newFilePath, function(er){
			if (er) throw er;
		});
		
	});
});