const jwt = require("jsonwebtoken");

function createToken(userDate) {
  const token = jwt.sign(userDate[0], "testKey");

  return token;
}

module.exports = createToken;
