//add the hotels and restaurants on select tag
// + --> onclick , 1.add a marker on the map 2.zooms in 3. add to the list
// x --> onclick , 1.remove a marker on the map 2.zooms out to original view 3. remove from the list

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');


const db = require("./models").db;
const app = express();

// logging and body-parsing
app.use(morgan);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  console.error(err, err.stack);
  res.status(err.status || 500);
  res.send("Something went wrong: " + err.message);
});

app.listen(3000, function(){
  console.log('Listening on port 3000')
});

