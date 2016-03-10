var express = require('express');
var request = require('request');
var router = express.Router();
var customer = require('.././models/customer');

router.get('/', function(req, res, next) {
    customer.find({}, function (err, cust) {
        res.send(cust);
    });
});

router.post('/', function(req, res, next) {
    var headers = (req.headers);
    var body = (req.body);
    var query = (req.query);
    console.log({date:Date(),headers:headers,body:body, query:query});
    res.json({date:Date(),headers:headers,body:body, query:query});
});

module.exports = router;
