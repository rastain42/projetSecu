
let mongoose = require('mongoose');

let articleSchema = mongoose.Schema({
  title: String, 
  content: String, 
  image: String, 
  user_id: String
}); 

module.exports = articleSchema