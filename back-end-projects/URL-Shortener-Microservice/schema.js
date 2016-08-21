var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
  
  var CounterSchema = Schema({
      _id: {type: String, required: true},
      seq: {type: Number, default: 0}
  });
  var counters = mongoose.model('counters', CounterSchema);
  var URLSchema = new Schema({
      id: {type: Number, default: 0},
      url: String
  });
  URLSchema.pre('save', function(next){
      counters.findByIdAndUpdate(
          {_id: 'urlid'}, 
          {$inc: { seq: 1}}, 
          function(error, counters){
              if (error) return next(error);
              this.id = counters.seq;
              next();
          
      });
  });
  
  module.exports = mongoose.model('UrlList', URLSchema);