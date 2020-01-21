require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { getAccessToken } = require('./slackApis')
const { generateJwtToken, verifyJwtToken } = require('./jwt');
const { revokeSlackToken } = require('./revokeSlackToken')
const cookieParser = require('cookie-parser')


const app = express();
app.use(bodyParser({extended: false}));
app.use(cookieParser());

//SERVE STATIC FILES
app.use(express.static(path.join(__dirname, '../build')))

const port = process.env.PORT || 8080;
const host = process.env.SERVER_HOST || 'localhost';

//REDIRECT FROM SLACK WITH CODE
app.get('/slack/code', (req, res) => {
  if(req.query.error === 'access_denied' || req.query.error === undefined) {
    res.clearCookie('jwt');
    res.redirect("/");
  } else {
    getAccessToken(req.query, (err, data) => {
      if(err) res.redirect('/');
      let jwtToken = generateJwtToken(data);
      res.clearCookie('jwt');
      res.cookie("jwt", jwtToken, {maxAge: 1000*60*60});
      res.redirect("/");
    });
  }
});

//AUTHENTICATING USER FOR SERVING PROTECTED ROUTES
app.get('/auth', (req, res) => {
  if(req.cookies.jwt) {
    verifyJwtToken(req.cookies.jwt, (dataload) => {
      res.send({ isAuth: dataload.ok, username: dataload.user.name });
    });
  } else {
    res.send({ isAuth: false });
  }
});

//REVOKING SLACK TOKEN AND CLEARING COOKIES ON LOGOUT
app.get('/logout', (req, res) => {
  verifyJwtToken(req.cookies.jwt, (dataload) => {
    revokeSlackToken(dataload['access_token'], (isRevoked) => {
      if(isRevoked.ok) {
        res.clearCookie('jwt');
        res.send({ isAuth: false });
      }
    });
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(port, host, () => {
    console.log(`Server Started on Port ${port}`);
});