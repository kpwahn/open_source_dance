var mysql = require('mysql');
var connection = mysql.createConnection({     // TODO export credentials to one place, and pull from server!!
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'open_source_dance'
});

module.exports = function (req, res) {

    connection.connect();

    connection.query('SELECT * from user_table', function (err, rows, fields) {
        if (err) throw err;

        console.log('Rows: ', rows);
    });

    connection.end();

    res.json({ message: 'Catch all' });
};