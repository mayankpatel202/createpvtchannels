const axios = require('axios');
const queryString = require('query-string');

function revokeSlackToken(token, cb) {
  let url = 'https://slack.com/api/auth.revoke';
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
  
  const requestBody = {
    token
  }

  axios.post(url, queryString.stringify(requestBody), config)
    .then((response) => {
      cb(response.data);
    })
    .catch((err) => {
      console.log("ERROR in revokeSlackToken.js ", err);
    })
}

module.exports = {
  revokeSlackToken,
}