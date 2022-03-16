const jwt = require('jsonwebtoken')


const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization
  console.log(authHeader)
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    console.log("okkkk")
    return res.status(401).send("Unauthorized")
    
  }

  if(!authHeader) res.end()
  const token = authHeader.split(' ')[1]

  try {
    console.log(jwt.verify(token, "Secret"))
    const decoded = jwt.verify(token, "Secret")
    const { id, username } = decoded
    req.user = { id, username }
    next()
  } catch (error) {
    return res.end()
     

  }
}

module.exports = authenticationMiddleware
