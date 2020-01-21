const jwt = require('jsonwebtoken');


function generateJwtToken(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 60*30});
}

function verifyJwtToken(token, callback) {
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if(err) throw err;

      callback(decoded);
  })
}

module.exports = { generateJwtToken, verifyJwtToken };