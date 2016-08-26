var express = require('express'),
app = express();
app.use(express.static(process.argv[3]));
app.get('/', function(req, res){
    res.send(process.argv[3]);
}).listen(process.argv[2], function(err){
    if (err) throw err;
    console.log('listening at port', process.argv[2]);
});