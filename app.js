/**

 */
    //引入express模块
var express = require('express');
//引入数据库写好的文件
var user = require('./userDao/user');
var crypto = require('crypto');


var cookieParser = require('cookie-parser');
var session = require('express-session');




//获得experss对象

var app= express();
// app.use(cookieParser());

app.use(session({
        secret: 'a secret',   // 可以随便写。 一个 String 类型的字符串，作为服务器端生成 session 的签名
        name:'session_id',//保存在本地cookie的一个名字 默认connect.sid  可以不设置
        resave: false,   //制保存 session 即使它并没有变化,。默认为 true。建议设置成 false
saveUninitialized: true,   //制将未初始化的 session 存储。 默认值是true  建议设置成true
 cookie: {
     maxAge:90000 //过期时间

 },	//设置过期时间比如是30分钟，只要浏览页面，30分钟没有操作的话在过期
rolling:false //在每次请求时强行设置 cookie，这将重置 cookie 过期时间(默认：false)
}));

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
        var inforData={
            index :data
        };
        if (req.session.name){
            res.render('index',{infor:inforData,session:req.session.name})
        }else{
            res.render('index',{infor:inforData,session:''})
        }

    })


});

app.get('/vip',function (req,res) {
    if (req.session.name){
        var infordata = {
            user:req.session.name
        }
        res.render('vip',{infor:infordata,flag:true})
    }else {
        // var flag=0
        res.render('vip',{infor:'',flag:false})
    }

});

app.post('/zhuce',urlencodedParser,function (req,res) {
    var name = req.body.name;
    var md5 = crypto.createHash('md5');
    var pwd = md5.update(req.body.pwd).digest('hex');
    // console.log(pwd,typeof pwd)
    // var pwdd = ''+pwd;
   //这里使用到数据库了，哈哈
    var dao = new user();
    dao.init();//数据库初始化，链接数据库
    //开始执行查询语句，是为了判断用户名是否被注册，
    dao.getName(name,function (data) {
        console.log(data);
        if (data.length==0){
            //走这里表示注册的名字在数据库不存在，可以正常注册
            console.log("插入数据！！！");
            dao.insert(name,pwd,function () {
                console.log('我向数据库注册数据成功了');
                    // res.write('ok');
                    // res.end()
                res.write('{"flag":true}');
                res.end();
            })
        }else{
            res.write('{"flag":false}');
            res.end();
        }
    })

});


app.post('/login',urlencodedParser,function (req,res) {
    var name = req.body.name;
    // var pwd = req.body.pwd;
    var md5 = crypto.createHash('md5');
    var pwd = md5.update(req.body.pwd).digest('hex');



    console.log(name,pwd)
    //数据库开始
    var dao = new user();
    //数据初始化：
    dao.init();
    req.session.username = name;
        dao.getName(name,function (data1) {
        console.log(data1,'我是用户数据');
            console.log(typeof data1[0].username,typeof name,data1.length,data1[0].passwd)
                if (data1.length>0 && data1[0].username==name ){
                    console.log('登陆正确')
                    dao.query(0,'test',function (err,data) {
                        var inforData={
                            user:name,
                            index :data
                        };
                        req.session.name = name;
                        res.send({infor:inforData});
                    });
                }else {
                    console.log('你登陆的数据不对');
                }
    })
});
var server = app.listen(8082,function () {
    console.log('链接到数据库，呵呵呵')
})






























