const express = require('express')
const app = express()
var cors = require('cors')
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var jsonParser = bodyParser.json();
app.use(cors())
app.use(jsonParser)
const signIn = require('./midllewares/User.js');





var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/projectsecu', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connexion à la base OK");
});

const User = require('./models')

const newUser = new User({username: "toto", email: "t", password: "t"})
      // const salt = bcrypt.genSaltSync(10);
      // newUser.password = bcrypt.hashSync(newUser.password, salt);
newUser.save() 




// var Music = mongoose.model('Music', musicSchema);





// //{"name":"test","style":"aa","author":"aa","url":"aa","image":"aa"}

// app.post('/api/music', async function (req, res) {
//   try {
//     const clientmusic = req.body
//     const notEmpty = Object.values(clientmusic).every(c => c != "")
//     console.log(notEmpty)
//     if (notEmpty) {
//       const music = new Music(req.body)
//       music.save()
//       res.send(music)
//     } else {
//       throw new Error("All fields aren't complete")
//     }
//   } catch (e) {
//     return res.sendStatus(400);

//   }
// })
   

// app.delete('/api/music/:id', (req, res) =>{
//   const currentId = { _id: req.params.id };
//   Music.deleteOne(currentId)
//   .then(() => res.send("Entry deleted"))
//   .catch(err => res.send(err));
// })


// app.patch('/api/music/:id', (req, res) => {
//   const clientmusic = req.body
//   const notEmpty = Object.values(clientmusic).every(c => c != "")
//   const values = Object.values(req.body)
//   const keys = Object.keys(req.body)
  
//   const obj = {}
//   if(!notEmpty){
//     keys.forEach(v => {
//       if(clientmusic[v] !== ''){
//         obj[v] = clientmusic[v]
//       }
//     })
//   } else {
//     obj = clientmusic
//   }
//   Music.updateOne({_id: req.params.id}, obj).then( // update one only udpate the prop in parameter 
//     () => {
//       console.log('updated')
//       res.send('It has been saved')
//     }
//   ).catch(
//     (error) => {
//       console.log('error', error)
//     }
//   );
// })


// app.delete('/music/delete', (req, res) => {
//   console.log('delete', req, res)
//   Music.deleteMany({}, function(err, data){
//     if(err){
//       res.send(err);
//     }
//     res.statusCode = 200;
//     res.send("ok")
//   })
// })



const mainRouter = require('./routes');

app.use('', mainRouter);






app.listen(3000)
