require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { getAuth } = require('./slackApis')

const app = express();
app.use(bodyParser({extended: false}));
//SERVE STATIC FILES
app.use(express.static(path.join(__dirname, '../build')))

const port = process.env.PORT || 8080;
const host = process.env.SERVER_HOST || 'localhost';

app.get('/slack/code', (req, res) => {
  if(req.query.error) {
    res.redirect('/');
  } else {
    getAuth(req.query, (err, data) => {
      if(err) res.redirect('/');
      if(data.ok) {
        console.log(data);
        res.redirect('/auth');
      }
    })
  }
});

app.get('/auth', (req, res) => {
   res.sendFile(path.join(__dirname, '../build/index.html'));
});



app.listen(port, host, () => {
    console.log(`Server Started on Port ${port}`);
});