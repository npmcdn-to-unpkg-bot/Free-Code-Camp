var fs = require('fs'),
    path = require('path');
var dir = path.resolve(__dirname,"F:\\Documents\\computer-programs\\free-code-camp-renamer\\Algorithms\\Advanced Algorithmic Scripting");
fs.readdir(dir, function(err1, files){
	if (err1) throw err1;
	console.log(files);
	files.forEach( function(file){
		var filePath = path.join(dir, file);
		var fileExtName = path.extname(file);
		var fileBaseName = path.basename(file, fileExtName);
		
		fs.readFile(filePath, 'utf8', function(err, data){
			if (err) throw err;
			//console.log(data);
			var data2 = data.replace(/(\<script\>)|(\<\/script\>)/g, '');
			var data3 = data2.replace(/(\<\!\-\-)/g, '/*');
			var data4 = data3.replace(/(\-\-\>)/g, '*/');
			var p = path.join(dir, fileBaseName + '.js')
			fs.writeFile(p, data4, function(er){
				if (er) throw er;
			});
		});
	});
})


