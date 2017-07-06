var connection = require('../../utils/database_util');
var bcrypt_util = require('../../utils/bcrypt_util');

//TODO remove console logs and actually have some good error checking/cases

module.exports = function (req, res) {
    var email = connection.escape(req.body.email);
    var password = connection.escape(req.body.password);

    bcrypt_util.encrypt(password,
        function(err, encryptedPassword) {
            if (err) {
                console.log('Encryption failed... ' + err);
            } else {
                connection.getConnection(function (err, connection) {

                    var sql = 'SELECT * FROM user_table WHERE email = ' + email + ';';

                    connection.query(sql, function (err, rows, fields) {
                        if (err) {
                            console.log('Something went wrong... ' + err);
                        } else {
                            if (rows.length == 0) {
                                sql = 'INSERT INTO user_table (email, password) VALUES (' +
                                    email + ', "' + encryptedPassword + '");';

                                connection.query(sql, function (err, rows, fields) {
                                    if (err) {
                                        console.log('Failed to create new user ' + err);
                                    } else {
                                        console.log('Successfully created user');
                                    }
                                });
                            } else {
                                console.log('Email address already exists');
                            }
                        }
                        res.json({message: '/users/create-new-user'});
                    });
                });
            }
        })
};
