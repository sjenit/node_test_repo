var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var headers = JSON.stringify(req.headers);
  var body = JSON.stringify(req.body);
  var query = JSON.stringify(req.query);
    console.log({date:Date(),headers:headers,body:body, query:query});
  //res.json({date:Date(),headers:headers,body:body, query:query});
    res.send("<html>Hello From Jenit Shah</html>" + req.query.code)
});

router.post('/', function(req, res, next) {
    var headers = (req.headers);
    var body = (req.body);
    var query = (req.query);
    console.log({date:Date(),headers:headers,body:body, query:query});
    res.json({date:Date(),headers:headers,body:body, query:query});
});

module.exports = router;
