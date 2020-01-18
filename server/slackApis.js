const axios = require('axios');


function getAuth(params, cb) {
    let url = 'https://slack.com/api/oauth.access';
    let clientID =  process.env.CLIENT_ID;
    let clientSecret = process.env.CLIENT_SECRET;
    let finalURL = `${url}?client_id=${clientID}&client_secret=${clientSecret}&code=${params.code}`
    axios.get(finalURL)
    .then((response) => {
      cb(null, response.data);
    })
    .catch((err) => {
        console.log("ERROR in AUTH", err)
    })
}

module.exports = {
    getAuth,
}