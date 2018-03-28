exports.menuItem=function (req,res) {
    var id= req.query.id;
    // console.log(id);
    //查询数据
    var MenuDao=require('./dao/MenuDao');
    var menuDao=new MenuDao();
    menuDao.init();
    menuDao.queryItem(id,function(data){
        // console.log(data);
        res.write(JSON.stringify(data));
        res.end();
    })
}