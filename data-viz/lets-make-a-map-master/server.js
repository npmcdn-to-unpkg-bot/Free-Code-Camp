var express = require('express'),
    app = express(),
    path = require('path'),
    port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, '/public')));
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "/public", "index.html"));
     console.log('on main page');
    
}).listen(port, function(){
    console.log('listening at port %s', port);
});