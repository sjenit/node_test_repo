var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/blogs', function(req, res, next) {
    var blogs = [
        {
            title: 'Title of Demo 1',
            body: 'Body of Demo 1',
            Author: 'Author of Demo 1'
        },
        {
            title: 'Title of Demo 2',
            body: 'Body of Demo 2',
            Author: 'Author of Demo 2'
        },
        {
            title: 'Title of Demo 3',
            body: 'Body of Demo 3',
            Author: 'Author of Demo 3'
        },
        {
            title: 'Title of Demo 4',
            body: 'Body of Demo 4',
            Author: 'Author of Demo 4'
        },
        {
            title: 'Title of Demo 5',
            body: 'Body of Demo 5',
            Author: 'Author of Demo 5'
        }
    ];
    res.json(blogs);
});

router.post('/', function(req, res, next) {
    var headers = (req.headers);
    var body = (req.body);
    var query = (req.query);
    console.log({date:Date(),headers:headers,body:body, query:query});
    res.json({date:Date(),headers:headers,body:body, query:query});
});

module.exports = router;
