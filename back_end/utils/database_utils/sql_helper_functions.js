var connection = require('../../utils/database_utils/database_connection');

module.exports = {
    escape: function(sql){
         return connection.escape(sql);
    }
}
