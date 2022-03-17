
let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
  username: String, 
  email: String, 
  password: String,
    
}); 

let User = mongoose.model('Music', userSchema);


module.exports = User