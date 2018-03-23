/**
 * Created by Administrator on 2018/3/23 0023.
 */
    //引入express模块
var express = require('express');
//引入数据库写好的文件
var user = require('./userDao/user');

//获得experss对象

var app= express();

//获得body-parser模块
var bodyParser = require('body-parser');
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });


//指定模板引擎
app.set('views engine','ejs');
//指定模板的位置
app.set('set',__dirname + '/views');
//设置静态文件
app.use(express.static('public'));

app.get('/index',function (req,res) {
    //创建对象
    var User = new user();
    //链接数据库
    User.init();
    //开始执行数据库操作
    User.query(0,'test',function (err,data) {
        res.render('index',{infor:data})
    })
});

app.get('/vip',function (req,res) {
    res.render('vip',{})
});




var server = app.listen(8082,function () {
    console.log('链接到数据库，呵呵呵')
})






























