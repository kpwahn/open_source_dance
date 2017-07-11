var https = require('https');
var express = require('express');

var apiRoutes = express.Router();

var port = process.env.PORT || 3000;

var app = express();

/* ROUTES */
app.use('/api/users', require('./routes/users/users.js'));
app.use('/api/authenticate', require('./routes/authentication/authenticate.js'));
app.use('*', require('./routes/index.js'));

app.listen(port, function() {
    console.log('api running on port ' + port);
});