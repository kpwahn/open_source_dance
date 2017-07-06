var https = require('https');
var express = require('express');
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* ROUTES */
app.use('/users', require('./routes/users/users.js'));
app.use('/authenticate', require('./routes/authentication/authenticate.js'));
app.use(require('./routes/index.js'));

app.listen(port, function() {
    console.log('api running on port ' + port);
});