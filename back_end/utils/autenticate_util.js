var connection = require('../utils/database_util');
var bcrypt = require('../utils/bcrypt_util');

exports.authenticate = function(req, callback) {
    var email = connection.escape(req.body.email);
    var password = connection.escape(req.body.password);

    bcrypt.compare(password, email, function(err, res){
        if (err) {
            callback(err, res);
        } else {
            callback(false, res);
        }
    })
}
