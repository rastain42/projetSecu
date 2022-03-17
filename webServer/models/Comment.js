
let mongoose = require('mongoose');

let commentSchema = mongoose.Schema({
  title: String, 
  content: String, 
  image: String, 
  article_id: String, 
}); 

module.exports = commentSchema