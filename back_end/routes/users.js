var router = require('express').Router();

router.get('/new-user', require('./users/new_user.js'));
router.get('/delete-user', require('./users/delete_user.js'));

router.get('/', function(req, res) {
    res.json({ message: '/users' });
});

module.exports = router;