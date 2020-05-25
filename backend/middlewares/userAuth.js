const jwt = require('jsonwebtoken');

const userAuth = (req,res,next) => {
  const token = req.header('usertoken');
  if(!token) return res.status(401).send('You are not authorized!');
  try{
    const decoded = jwt.verify(token,'secretkey');
    req.user = decoded;
    next();
  }catch(e){
    return res.status(400).send('Invalid token');
  }
}

module.exports = userAuth
