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
        escapedEmail = connection.escape(email);
        escapedPassword = connection.escape(myPlaintextPassword);

        connection.getConnection(function (err, connection) {
            var sql = 'SELECT password FROM user_table WHERE email = ' + escapedEmail + ';';

            connection.query(sql, function (err, rows) {
                if (err) {
                    callback(err, false);
                } else if (rows.length == 1) {
                    var hash = rows[0].password;

                    bcrypt.compare(escapedPassword, hash, function (err, res) {
                        if (err) {
                            callback(err, false);
                        } else {
                            callback(false, res);
                        }
                    });
                } else {
                    if (rows.length == 0) {
                        callback("Email not found", false);
                    } else {
                        callback("Incorrect email or password", false);
                    }
                }
            });
        });
    }
}
