function MenuDao(){
	var connection;
	this.init=function(){
		var mysql=require('mysql');
		connection=mysql.createConnection({
			host:'localhost',
			user:'root',
			password:'root',
			port:'3306',
			database:'bishengke'
		});
		connection.connect();
	}
	this.query=function(callback){
		var sql='select foodname,images from food';
		connection.query(sql,function(err,result){
			if(!err){
				callback(result);
			}else{
				console.log(err.message);
			}
		})
	}
}

module.exports=MenuDao;