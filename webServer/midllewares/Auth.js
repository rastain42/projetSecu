const jwt = require('jsonwebtoken')


const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization
  console.log(authHeader)
  console.log('TOKENNN 2 =>', authHeader)

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    console.log("[log] unAuthorized connexion attempt")
    return res.status(403).send("Unauthorized")
    
  }

  if(!authHeader) res.status(403).send("Unauthorized")

  const token = authHeader.split(' ')[1]

  try {
    console.log(jwt.verify(token, "Secret"))
    const decoded = jwt.verify(token, "Secret")
    const { id, username } = decoded
    req.user = { id, username }
    next()
    console.log("[log] Authorized connexion")

  } catch (error) {
    return res.status(403).send("Unauthorized")
  }
}

module.exports = authenticationMiddleware
