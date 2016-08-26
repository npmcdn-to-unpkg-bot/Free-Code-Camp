var express = require('express'),
app = express(),
multer = require('multer'),
path = require('path'),
upload = multer(),
port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.post('/upload', upload.single('file'), function(req, res){
	if (req.file){
		res.json({
			'filename': req.file.originalname,
			'size': req.file.size + 'bytes'
		})
	}else{
		res.status(400).end();
	}
});
app.listen(port, function(){
	console.log('listening on port', port)
});