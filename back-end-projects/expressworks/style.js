var express = require('express'),
app = express();
app.use(express.static(process.argv[3]));
app.use(require('stylus').middleware(process.argv[3]));
app.get('/*', function(req, res){
    res.render(process.argv[3]);
})
app.listen(process.argv[2], function(err){
    if (err) throw err;
    console.log('listening at port: ', process.argv[2]);
});