var express  = require('express'),
app = express(),
bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.post('/form', function(req, res){
    var out = req.body.str.split('').reverse().join('');
    res.send(out);
}).listen(process.argv[2], function(err){
    if (err) throw err;
     console.log('listening at jport', process.argv[2]);
});