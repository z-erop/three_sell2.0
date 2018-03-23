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
		// console.log(data);
		res.render('menu',{menuData:data});
	})
})

app.get('/piz',function(req,res){
  // var cid= req.query.cid;
  console.log(req.query.id);
  //查询数据
  //   var MenuDao=require('./dao/MenuDao');
  //   var menuDao=new MenuDao();
  //   menuDao.init();
  //   menuDao.queryItem(cid,function(data){
  //
  //       res.write(JSON.stringify(data));
  //       res.end();
  //   })



})

var server=app.listen(8080,function(){
	console.log('8080端口')
})
