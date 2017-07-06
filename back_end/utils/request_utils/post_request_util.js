module.exports = {
    checkReqBody: function(req, expected_keys){
        var response = {
            is_sanitized: false,                      // CREATE A BRAND NEW REQUEST OBJECT????????
            has_correct_keys: true,
            missing_keys: []
        };

        expected_keys.forEach(function(key, index){
            if(req.body[key] === undefined) {
                response.has_correct_keys = false;
                response.missing_keys.push(expected_keys[index]);
            }
        });

        return response;
    }
}