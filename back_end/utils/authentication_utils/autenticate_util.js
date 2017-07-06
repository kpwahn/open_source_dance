var connection = require('../database_utils/database_connection');
var bcrypt_util = require('../encryption_utils/bcrypt_util');
var jwt    = require('jsonwebtoken');

exports.authenticate = function(req, callback) {
    bcrypt_util.compare(req.body.password, req.body.email, function(err, res){
        if (err) {
            callback(err, res);
        } else if (res) {
            var token = jwt.sign({}, 'Some secret', {
                expiresIn : 60 * 60 * 24 // Ten minutes
            });
            callback(false, res);
        } else {
            callback("Something went wrong", res);
        }
    })
}

/*
bcrypt_utils.compare - returns and err, true or false
 */
