var https = require('https');
var express = require('express');
var bodyParser = require('body-parser');

var port = process.env.PORT || 8080;
var router = express.Router();

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/users', require('./routes/users.js'));

app.use(require('./routes/index.js'));

app.listen(port, function() {
    console.log('api running no port ' + port);
});