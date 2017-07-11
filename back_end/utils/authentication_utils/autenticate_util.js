let bcrypt_util = require('../encryption_utils/bcrypt_util');
let messages = require('../constants');
let jwt = require('jsonwebtoken');

exports.authenticate = function(req, callback) {
    bcrypt_util.compare(req.body.password, req.body.email, function(err, res){
        if (err) {
            callback(err, false);
        } else if (res) {
            var token = jwt.sign({}, 'secret', {
                expiresIn : '1h'
            });
            callback(null, {message: messages.success_messages.authenticated, token: token});
        } else {
            callback({"message": messages.error_messages.invalid_email_or_password}, false);
        }
    })
};

