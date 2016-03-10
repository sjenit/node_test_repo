var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.sendfile(__dirname+'/public/index.html');
});

router.post('/', function(req, res, next) {
    var headers = (req.headers);
    var body = (req.body);
    var query = (req.query);
    console.log({date:Date(),headers:headers,body:body, query:query});
    res.json({date:Date(),headers:headers,body:body, query:query});
});

module.exports = router;
