var mongo = require('mongodb').MongoClient,
  d = process.argv[2],
  url = 'mongodb://localhost:27017/' + d;
  mongo.connect(url, function(err, db){
    if (err) throw err
    var coll = db.collection(process.argv[3]);
    coll.remove({
      _id: process.argv[4]
    }, function(err){
        if (err) throw err
        db.close()
    });
});
