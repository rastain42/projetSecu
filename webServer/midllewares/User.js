const User = require('../models/');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')


const signUp = async (req, res) => {
  try {
    const user = req.body
    const notEmpty = Object.values(user).every(c => c != "")
    console.log(user, notEmpty);
    if(notEmpty) {
      const newUser = new User(user)
      const salt = bcrypt.genSaltSync(10);
      newUser.password = bcrypt.hashSync(newUser.password, salt);
      newUser.save()      
      res.status(200).send(newUser);
    } else {
      res.send(401);
    }
  } catch (err) {
    res.send(err);
  }
}


const signIn = async (req, res, next) => {
  const body = req.body;
  const user = await User.findOne({ email: body.email });
  if (user) {
    // check user password with hashed password stored in the database
    const validPassword = await bcrypt.compare(body.password, user.password);
    if (validPassword) {
      const token = jwt.sign({
        id: user.id,
        username: user.username
    }, "Secret", { expiresIn: '3 hours' })

    req.token = ({ access_token: token })
    next()
    } else {
      res.status(400).json({ error: "Invalid Password" });
    }
  } else {
    res.status(401).json({ error: "User does not exist" });
  }

}

module.exports ={signIn, signUp}

