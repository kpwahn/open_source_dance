var mysql = require('mysql');

// TODO export credentials to one place, and pull from server!!
var connection = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'open_source_dance'
});

module.exports = connection;
