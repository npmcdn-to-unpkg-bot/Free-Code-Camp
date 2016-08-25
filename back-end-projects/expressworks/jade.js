var express = require('express'),
app = express();
app.set('views', process.argv[3]);
app.set('view engine', 'jade');
app.get('/home', function(req, res){
      res.render(process.argv[3], {date: new Date().toDateString()});
}).listen(process.argv[2], function(err){
    if (err) throw err;
    console.log('listening at port: ', process.argv[2]);
});