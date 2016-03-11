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

router.get('/bigcomm', function(req, res) {
    console.log("new request...");
    if (req.body.access_token) {
        res.send("<html>Hello From Jenit Shah, Access Token is </html> " + req.body.access_token)
    }
    else {
        //res.send("<html>Hello From Jenit Shah, Code is " + req.query.code + " store hash is " + req.query.context + " scope is " + req.query.scope + "</html>");
        var body = {
            client_id:'a02uoc9lbd93uyl88vs9tmeobcfrdpa',
            client_secret:'ghke5g3o1vfb6a9pf3dsp64ff6tbh2r',
            code:req.query.code,
            scope:'store_v2_products_read_only',
            grant_type:'authorization_code',
            redirect_uri:'https://jenitsimpleserver.herokuapp.com',
            context:'stores/hb0qnk'
        };
        // request.post("https://login.bigcommerce.com/oauth2/token?client_id=a02uoc9lbd93uyl88vs9tmeobcfrdpa&client_secret=ghke5g3o1vfb6a9pf3dsp64ff6tbh2r&code=fae6ejhxiyxq8hpkss9vucxu4o3rmmn&scope=store_v2_products_read_only&grant_type=authorization_code&redirect_uri=https://jenitsimpleserver.herokuapp.com&context=stores/hb0qnk", {
        request.post({url:'https://login.bigcommerce.com/oauth2/token?grant_type=authorization_code', form:JSON.stringify(body) }, function (error, response, body) {
            console.log("here " + body);
            res.status(response.statusCode);
            if (!error && response.statusCode == 200) {
                console.log(JSON.parse(body));
                res.json({status: 'success', response: JSON.parse(body)});
            }
            else {
                res.json({status: 'failure', error: 'Status Code:' + response.statusCode, error_desc:JSON.parse(body)});
            }
        });
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
