var mysql = require('mysql');

var connection = mysql.createPool({     // TODO export credentials to one place, and pull from server!!
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'open_source_dance'
});



module.exports = connection;
