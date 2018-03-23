/**
 * Created by Administrator on 2018/3/23 0023.
 */
function user() {
    //链接数据库
    var connection;
    this.init = function () {
        //调用mysql模块
        var mysql = require('mysql');
        //创建一个connection
        connection = mysql.createConnection({
            host : 'localhost', //主机的ip
            user : 'root',
            password : 'root',
            port : '3306',
            database :'waimai'  //数据库的表
        });
        //链接数据库
        connection.connect();
    };


    this.query = function (id,use,call) {
        var sql = 'SELECT * FROM ' + use;
        connection.query(sql,function (err,res) {
            if (!err){
                call(err,res);
                console.log(res)
            }else{
                console.log('你哪没对');
                return;
            }
        })
    };
    this.getName = function (name,call) {
        var sql = 'select * from admins where username = '+name;
        console.log(sql);
        connection.query(sql,function (err,res) {
            if (!err){
                call(res)
            }else{
                console.log('查找用户名没搞对');
                return;
            }
        })
    };
    //插入语句
    this.insert = function (name,passwd,call) {
        console.log('执行')
        var sql = 'INSERT INTO admins(username,passwd) VALUES(?,?)';
        var sql_params = [name,passwd];
        connection.query(sql,sql_params,function (err,res) {
            console.log(11)
            if (!err){
                console.log(res)
            }
            else{
                console.log(sql_params);
            }
        })
    }



}


module.exports = user;