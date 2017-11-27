var express = require('express');
var router = express.Router();
var request=require("request");

/* GET home page. */
router.get('/index', function(req, res, next) {
    //console.log(req.params.id);
    //表示路由传递的参数

    console.log(req.cookies)
    console.log(req.query)
    //get提交的参数取出来
    console.log('body-->', req.body)
    //服务器的console直接从terminal打出，不会在浏览器的console输出

    res.render('index', { data: "ejs"});
});
router.post('/post', function(req, res, next) {
    var obj={
        'data_version':0,
        'device_token':'',
        'format':'json',
        'osv':'web_h5_0_*',
        'sess_key':'b54805f5bf946132bcd6230d0f4c6e6d02424ac3',
        'shop_url':'http://18510561126.davdian.com',
        'ts':'1510390200863',
        'wh':'750_1334',
        'sign':'B2959155162203BE05CC6764E11C86BD'
    };
    console.log("req.body:",req.body);
    request.post({url:'https://18510561126.davdian.com/api/mg/content/course/getCourseSearchHotwords',form: obj} ,function (error, response, body) {
        console.log('body:', body); // Print the HTML for the Google homepage.
        res.send(body);

    });
});
// router.get('/users', function(req, res, next) {
//     res.send('chenhong');
// });

module.exports = router;
