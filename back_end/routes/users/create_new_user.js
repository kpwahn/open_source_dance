var connection = require('../../utils/database-util');

module.exports = function (req, res) {
    connection.getConnection(function(err, connection){

        // TODO Encrypt the password somehow
        var email = connection.escape(req.body.email);
        var password = connection.escape(req.body.password);

        // TODO check for duplicates
        var sql = 'INSERT INTO user_table (email, password) VALUES (' +
            email + ', ' + password + ');';

        connection.query(sql, function (err, rows, fields) {
            if (err) {
                console.log("Failed to create new user " + err );
            } else {
                console.log('Successfully created user');
            }
        });

        connection.query('SELECT * FROM user_table', function (err, rows, fields) {
            if (err) throw err;

            console.log('Users: ', rows);
        });

        connection.release();

        res.json({ message: '/users/create-new-user' });
    });
};
