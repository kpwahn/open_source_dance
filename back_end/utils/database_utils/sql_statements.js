module.exports = {
   select_email : function(email) {
       return 'SELECT * FROM user_table WHERE email = ' + email + ';';
   },
    insert_email: function(email, password) {
       return 'INSERT INTO user_table (email, password) VALUES (' + email + ', "' + password + '");'
    }
}

