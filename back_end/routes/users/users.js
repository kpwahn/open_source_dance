let router = require('express').Router();
let bodyParser = require('body-parser');

router.post('/create-new-user', bodyParser.json(), require('./create_new_user.js'));

module.exports = router;