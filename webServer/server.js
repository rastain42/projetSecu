const express = require('express')
var cors = require('cors')
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
var jsonParser = bodyParser.json();

const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(jsonParser)

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.connect('mongodb+srv://yaniss:tagataga@cluster0.zjlcg.mongodb.net/secu1?retryWrites=true&w=majority', connectionParams);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("Connexion à la base OK");
});

const mainRouter = require('./routes');
app.use('', mainRouter);

app.listen(3000)
