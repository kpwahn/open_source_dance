var connection = require('../../utils/database_utils/database_connection');
var bcrypt_util = require('../../utils/encryption_utils/bcrypt_util');
var sql = require('../../utils/database_utils/sql_helper_functions');
var sql_statements = require('../../utils/database_utils/sql_statements');
var post_request_util = require('../../utils/request_utils/post_request_util');

//TODO remove comments and actually have some good error checking/cases

module.exports = function (req, res) {
    var request_check = post_request_util.checkReqBody(req, ['email', 'password']);

    if( !request_check.has_correct_keys ){
        res.status(400);
        res.json(request);
    } else {

        var email = sql.escape(req.body.email);
        var password = sql.escape(req.body.password);

        bcrypt_util.encrypt(password, function (err, encryptedPassword) {
            if (err) {
                // COULD NOT ENCRYPT PASSWORD
                console.log(err);
            } else {
                connection.getConnection(function (err, connection) {
                    if (err) {
                        // COULD NOT ESTABLISH CONNECTION TO THE DB
                        console.log(err);
                    } else {
                        connection.query(sql_statements.select_email(email), function (err, rows) {
                            if (err) {
                                // COULD NOT QUERY DATABASE
                                console.log(err);
                            } else {
                                if (rows.length == 0) {
                                    connection.query(sql_statements.insert_email(email, encryptedPassword), function (err, rows) {
                                        if (err) {
                                            // COULD NOT QUERY DATABASE
                                            console.log(err);
                                        } else {
                                            // EMAIL AND PASSWORD WERE SUCCESSFULLY INSERTED
                                            res.json({});
                                        }
                                    });
                                } else {
                                    // RESPONSE FROM DATABASE WAS AN EMPTY ARRAY
                                    console.log('Email address already exists');
                                }
                            }
                        });
                    }
                });
            }
        })
    }
};
