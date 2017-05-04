var connection = require('../utils/database_util');
var bcrypt = require('bcrypt');
// TODO pull saltRounds from server
const saltRounds = 10;

module.exports = {
    encrypt: function(myPlaintextPassword, callback) {
        bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
            if (err) {
                callback(err, null);
            } else {
                callback(false, hash);
            }
        });
    },

    compare: function(myPlaintextPassword, email, callback) {
        connection.getConnection(function (err, connection) {
            var sql = 'SELECT password FROM user_table WHERE email = ' + email + ';';

            connection.query(sql, function (err, rows) {
                if (err) {
                    callback(err, false);
                } else if (rows.length == 1) {
                    var hash = rows[0].password;

                    bcrypt.compare(myPlaintextPassword, hash, function (err, res) {
                        if (err) {
                            callback(err, false);
                        } else {
                            callback(false, res);
                        }
                    });
                } else {
                    callback("Incorrect email or password", false);
                }
            });
        });
    }
}
