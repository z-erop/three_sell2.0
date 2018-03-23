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
    }



}


module.exports = user;