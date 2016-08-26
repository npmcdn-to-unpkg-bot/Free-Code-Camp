var mongo = require('mongodb').MongoClient,
  firstName = process.argv[2],
  lastName = process.argv[3],
  doc = {
    firstName: firstName,
    lastName: lastName
  },
  url = 'mongodb://localhost:27017/learnyoumongo';
mongo.connect(url, function(err, db){
  if (err) throw err;
  var coll = db.collection('docs');
  coll.insert(doc, function(err, data){
    if (err) throw err;
    console.log(JSON.stringify(doc))
    db.close();
  });
});
