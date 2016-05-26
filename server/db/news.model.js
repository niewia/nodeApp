var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var newsSchema = new Schema({
  _id: Number,
  title: String,
  content: String
});

// the schema is useless so far
// we need to create a model using it
var News = mongoose.model('User', newsSchema);

// make this available to our users in our Node applications
module.exports = News;