var router = require('express').Router();

router.post('/create-new-user', require('./create_new_user.js'));

module.exports = router;