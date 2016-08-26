# MongoDB

saves on documents so if you can save inforation on one sheet of page then mongoose is a good fit.

Take an example w/ bank accounts w/ shared accounts. This brings problems w/ mongo db database. Mongo works best with a 1:1 model. The information is stored in a big ball called collections.

### GET STARTED:
# TODO DIFFERENCE B/W mongod, mongoose, mongodb
`npm install mongodb --save`

```javascript
const MongoClient = require('mongodb').MongoClient

// var url = 'mongodb://localhost:27017/learnyoumongo // database = learnyoumongo
MongoClient.connect('link-to-mongodb', (err, database) => {
  // ... start the server
;})

 Most people store their databases on cloud services like MongoLab. We’re going to do same as well.

```javascript
MongoClient.connect('your-mongodb-url', (err, database) => {
  // ... do something here
})

var db;
MongoClient.connect('your-mongodb-url', (err, database) => {
  if (err) return console.log(err)
  db = database app.listen(3000, () => {
    console.log('listening on 3000')
  })
})

app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})
```

#### Javascript tips:
``` javascript
const coll = db.<collection>
then  simply call coll:
coll.find(), coll.insert(), coll.update(),
```
## CRUD
Create, Read, Update, Delete
***

#### Create:
insert will create collection if it doesn't exist. Operation will create WriteResult object.
``` javascript
db.collection.insert()
    .insertOne()
    .insertMany([
        {},
        {}
    ])
```
#### Read:
---
find, findOne, findMany, count
be careful with integers. may need to convert to number from string (learnyoumongo exercise 3)

``` javascript
// only projected values are displayed
db.collection.find( query, projection, options);

db.collection.find({ name: 'Joe' },
  {name: 1, address: 1}
).limit(5)

db.users.find({ status: { $in: ['P', 'D'] } );

note: use $in instead or $or when performing equality checks on the same field.
```
#### count

methods:
``` javascript
db.collection.find().count(<query>)

or

db.collection.find(<query>).count()

//note using  the 2nd will ignore limit and skip. Will return all count in collection matching conditions.
```
#### specify and condition ( use comma):
```javascript
db.users.find({ status: 'A', age: { $lt: 30 } })
```
#### specidfy or condition:
```javascript
db.users.find(
    {
          $or: [ { status: 'A'}, {age: {$lt: 30} } ]
    }
);

##### Arrays

exact match:
```javascript
.find( { bades: [ 'blue, 'black' ]})
```
match specific element ( notice dot notation and quotes):
```javascipt
.find( { "badges.0": "black" })
```

#### sort:
``` javascript
coll.find.sort(<sort order>)

where ascending { age: 1}
and
descending: { age: -1 }
```

#### chaining

```javascript

db.users.find().count()
```

The second parameter, update, tells MongoDB what to do with the update request. It uses MongoDB’s update operators like $set, $inc and $push. We will use the $set operator since we’re changing Yoda’s quotes into Darth Vadar’s quotes:

{

  $set: {
    name: req.body.name,
    quote: req.body.quote
  }
}

The third parameter, options, is an optional parameter that allows you to define additional stuff. Since we’re looking for the last quote by Yoda, we will set sort within options to {_id: -1}.

We can force it to create a new entry if we set the upsert option, which means insert (or save) if no entries are found, to true:

{

  sort: {_id: -1},

  upsert: true
}

app.put('/quotes', (req, res) => {
  db.collection('quotes')
  .findOneAndUpdate({name: 'Yoda'}, {
    $set: {
      name: req.body.name,
      quote: req.body.quote
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)

  })
})

The proper way to check if fetch resolved successfully is to use the okmethod on the response object. You can then return res.json() if you want to read the data that was sent from the server:

fetch({ /* request */ })

.then(res => {

  if (res.ok) return res.json()

})

.then(data => {

  console.log(data)
})

## Schemas
A schema is just a representation of your data in MongoDB. This is where you can enforce a certain field to be of particular type. A field can also be required, unique or contain only specified characters.

var mongoose = require('mongoose'); var characterSchema = new mongoose.Schema({ characterId: { type: String, unique: true, index: true }, name: String, race: String, gender: String, bloodline: String, wins: { type: Number, default: 0 }, losses: { type: Number, default: 0 }, reports: { type: Number, default: 0 }, random: { type: [Number], index: '2d' }, voted: { type: Boolean, default: false }}); module.exports = mongoose.model('Character', characterSchema);

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

Connect using the MongoClient to a running mongod instance by specifying the MongoDB uri. For example, the following code connects to a MongoDB instance that runs on the localhost interface on port 27017 and switch to the test database.

var url = 'mongodb://localhost:27017/test';MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  db.close();});

A successful connection should print out the following line:

Connected correctly to server.
## Working on local database
``` javascript
mongoimport --db <db> --collection<collection> --drop --file <path>
```
### Switch Databases:

``` javascript
use <db>
```
### Show Databases:

``` javascript
show dbs or show databases
```

#### Load Javascript in shell:
```javascript
load('mytest.js')

or

mongo localhost:27017/test myjsfile.js
```

### Aggregate
```javascript
collection.aggregate([
  { $match: { status: 'A' }}
  , { $group: {
  _id: 'total' // This can be an arbitrary string in this case
  , total: {
  // $sum is the operator used here
  $sum: '$value'
  }
  }}
  ]).toArray(function(err, results) {
  // handle error
  console.log(results)
  // => [
  // => { _id: 'total', total: 11 }
  // => ]
  })
```
Other operators used in the $group stage include:

  * `$avg`
  * `$first`
  * `$last`
  * `$max`
  * `$min`
  * `$push`
  * `$addToSet`
