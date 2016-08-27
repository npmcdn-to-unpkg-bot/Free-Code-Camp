var mongo = require('mongodb').MongoClient,
  url = 'mongodb://localhost:27017/learnyoumongo',
  size = process.argv[2];

mongo.connect(url, function(err, db){
  if (err) throw err
  var prices = db.collection('prices')
 var numItems =  prices.count({ size: size});
  prices.aggregate([
    { $match: { size: size},
    { $group: {
      _id: 'avg',
     average: { $avg: '$price'}
    }}
   ]).toArray(function(err, results){
     if (err) throw err
     var output = +results[0].average.toFixed(2);
    console.log(output);
    db.close();
  });
});
