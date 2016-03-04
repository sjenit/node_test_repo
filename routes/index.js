var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    if (req.body.access_token) {
        res.send("<html>Hello From Jenit Shah, Access Token is </html> " + req.body.access_token)
    }
    else {
        res.send("<html>Hello From Jenit Shah, Code is " + req.query.code + " store hash is " + req.query.context + " scope is " + req.query.scope + "</html>");
    }

    //res.send("<html> req query="+JSON.parse(req.query)+" req body="+JSON.parse(req.body)+"</html>");

});

router.post('/', function(req, res, next) {
    var headers = (req.headers);
    var body = (req.body);
    var query = (req.query);
    console.log({date:Date(),headers:headers,body:body, query:query});
    res.json({date:Date(),headers:headers,body:body, query:query});
});

module.exports = router;
