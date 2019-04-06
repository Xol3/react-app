// libraries
const express = require('express'); // middleware
const bodyParser = require('body-parser');
const path = require('path');

var app = express();

// invoke express method called use that uses the bodyparser methods json...
app.use(bodyParser.json()); // transform an obj into a json
app.use(bodyParser.urlencoded({extended: false}));

// this will connect to directory public in root, public will have an index.html, to an html file
app.use(express.static(path.join(__dirname, '../public')))

// / refers to the root, in case is unable to connect to the public path will give a hello world meaning server works, is like a test to know server is running
app.get('/', function(req, res) {
  res.send('Hello World'); // this appears if not able to connect to html
});

// sets up the port
app.listen(3000, function(){
  console.log('Server Started on Port 3000...')
});
// test