var connection = require('../../utils/database-util');

module.exports = function (req, res) {
    connection.getConnection(function(err, connection){

        // TODO Encrypt the password somehow
        var email = connection.escape(req.body.email);
        var password = connection.escape(req.body.password);

        // TODO check for duplicates
        var sql = 'SELECT * FROM user_table WHERE email = ' + email + ';';

        connection.query(sql, function (err, rows, fields) {
            if (err) {
                // TODO more specific errors
                console.log('Something went wrong... ' + err );
            } else {
                if( rows.length == 0 ) {

                    sql = 'INSERT INTO user_table (email, password) VALUES (' +
                        email + ', ' + password + ');';

                    connection.query(sql, function (err, rows, fields) {
                        if (err) {
                            console.log('Failed to create new user ' + err );
                        } else {
                            console.log('Successfully created user');
                        }
                    });
                } else {
                    console.log('Email address already exists');
                }
            }
            res.json({ message: '/users/create-new-user' });
        });
    });
};
