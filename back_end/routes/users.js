var router = require('express').Router();

router.post('/create-new-user', require('./users/create_new_user.js'));
router.get('/delete-user', require('./users/delete_user.js'));

router.get('/', function(req, res) {
    res.json({ message: '/users' });
});

module.exports = router;