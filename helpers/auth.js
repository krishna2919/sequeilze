const config = require('config');
const jwt = require('jsonwebtoken');
const expiresIn = '24h';
const genrateToken = (req, res, next) => {
  console.log(req.body.Email);
    const token = jwt.sign({ Email: req.body.Email }, config.get('jwtPrivateKey'),{ expiresIn });
    console.log(token, 'token');
    res.middlewareData = token;
    next();
}


exports.genrateToken = genrateToken;


