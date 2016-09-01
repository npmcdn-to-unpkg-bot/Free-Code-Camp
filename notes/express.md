# Express

## get url parameter
`http://example.com/api/users?id=4&token=sdfa3&geo=us`
```javascript
// is req.query('id') same result????
var id = req.param('id');

```
### Specific Routing for parameters
```javascript
app.get('/api/:version, function(req, res){
  res.send(req.params.version) // notice params not param
});
```
### Routes with multiple parameters
hypen and dot are interpreted literally, they can be used along with route parameters. 
```javascript
Route path: /flights/:from-:to
Request URL: http://localhost:3000/flights/LAX-SFO
req.params: { "from": "LAX", "to": "SFO" }
```
### Route Parameter Middleware
```javascript
app.param('name', function(req, res, next, name){
/ check if the user with that name exists
    // do some validations
    // add -dude to the name
    var modified = name + '-dude';

    // save name to the request
    req.name = modified;

    next();
});
app.get('/api/users/:name', function(req, res){
  res.send('what is up ' + req.name + '!');
});
```


