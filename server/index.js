const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser());

//SERVE STATIC FILES
app.use(express.static(path.join(__dirname, 'build')))

const port = process.env.PORT || 8080;







app.listen(port, () => {
    console.log(`Server Started on Port ${port}`);
})