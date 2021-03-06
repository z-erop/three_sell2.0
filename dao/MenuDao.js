function MenuDao(){
	var connection;
	//初始化数据库，创立数据库连接。
	this.init=function(){
		var mysql=require('mysql');
		connection=mysql.createConnection({
			host:'localhost',
			user:'root',
			password:'root',
			port:'3306',
			database:'ours'
		});
		connection.connect();
	}
    //查询菜单的列表信息
    this.querycate=function (callback) {
        var sql='select cid,catename from cate';
        connection.query(sql,function (err,result) {
            if(!err){
                callback(result);
            }else {
                console.log(err.message);
            }
        })
    }
    //页面加载时查询初始数据。
    this.queryfirstdata=function (id,callback) {
        var sql='select cate.cid,cate.catename,food.foodname,food.fid,food.images from food join cate on food.cid=cate.cid where cate.cid='+id;
        connection.query(sql,function (err,result) {
            if(!err){
                callback(result);
            }else {
                console.log(err.message);
            }
        })
    }
    //查询商品列表商品栏表和类别，对应栏目状态
	this.queryItem=function (id,callback) {
		var sql='select cate.cid,cate.catename,food.foodname,food.fid,food.images from food join cate on food.cid=cate.cid where food.cid='+id;
		connection.query(sql,function (err,result) {
			if(!err){
				callback(result);
			}else {
				console.log(err.message);
			}
        })
    }

    //查询food信息表
    this.queryfood=function(id,callback){
	    var sql='select fid,foodname,images,detail,price,sales,discount from food where fid='+id;
	    connection.query(sql,function (err,result) {
            if(!err){
                callback(result);
            }else {
                console.log(err.message);
            }
        })
    }


}

module.exports=MenuDao;