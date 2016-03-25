var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.sendfile(__dirname+'/public/index.html');
});

router.get('/zapier/:cont_id', function(req, res, next) {
    if (req.params.cont_id == 91) {
        res.json({
            "id": 91,
            "name": "A R S Wooden Flooring",
            "email": "amit.mital@frama.in",
            "mobile": "9810095400",
            "designation": "",
            "photo": "",
            "imagePath": "http://stagingnew1.mysoulcrm.com/emails/mailAttachments/"
        });
    }
    else {
        res.send(400);
    }
});

router.post('/', function(req, res, next) {
    var headers = (req.headers);
    var body = (req.body);
    var query = (req.query);
    console.log({date:Date(),headers:headers,body:body, query:query});
    res.json({date:Date(),headers:headers,body:body, query:query});
});

module.exports = router;
