var router = require('express').Router();
var auth = require('../../utils/autenticate_util');

router.post('/', function(req, res) {
    auth.authenticate(req, function(err, isAuthenticated){
        if(err) {
            res.json({ message: err });
        } else if (isAuthenticated){
            res.json({ message: 'Here is some fancy token' });
        } else {
            res.json({ message: 'Access denied' });
        }
    });
});

module.exports = router;