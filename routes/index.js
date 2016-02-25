var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  var headers = JSON.stringify(req.headers);
  var body = JSON.stringify(req.body);
  var query = JSON.stringify(req.query);
  var resp = "GET Request at " + new Date() + "\nHeaders : " + headers + "\nBody : " + body + "\nQuery : " + query;
  console.log(resp);
  res.send(resp);
});

router.post('/', function(req, res, next) {
    var headers = JSON.stringify(req.headers);
    var body = JSON.stringify(req.body);
    var query = JSON.stringify(req.query);
    var resp = "POST Request at " + Date.now() + "\nHeaders : " + headers + "\nBody : " + body + "\nQuery : " + query;
    console.log(resp);
    res.send(resp);
});

module.exports = router;
