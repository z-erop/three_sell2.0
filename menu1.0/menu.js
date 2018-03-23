var express =require('express');
var app=express();
var viewPath=__dirname+"/views/";

app.use(express.static('public'));
app.set('views engine','ejs');
app.set('views',__dirname+"/views");

app.get('/menu',function(req,res){
	var MenuDao=require('./dao/MenuDao');
	var menuDao=new MenuDao();
	menuDao.init();
	menuDao.query(function(data){
		console.log(data);
		res.render('menu',{menuData:data});
	})
	

	
})


var server=app.listen(8080,function(){
	console.log('8080端口')
})
