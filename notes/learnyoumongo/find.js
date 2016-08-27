var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
mongo.connect(url, function(err, db){
  if (err) throw err;
  var coll = db.collection('parrots');
  var age = process.argv[2];
  coll.find({
    age: {
      $gt: parseInt(age)
    } 
  }).toArray(function(err, documents){
    if (err) throw err;
    console.log(documents);
    db.close();
  });
});
