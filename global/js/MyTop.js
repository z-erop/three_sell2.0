window.onload = function () {
    vue();
    myvue();
}

function vue () {
    //注册一个全局组件  关键字components为私有组件
    Vue.component(
        //自定义的标签名
        'my-top',
        {
            //标签内容   template 关键字
            template:`'<div class="topBox">
						<nav class="navbar navbar-default navbar-fixed-top navTop" role="navigation"> 
						
						<div class="myLogo logo"> 
					        <a class="navbar-brand" href="#"> </a> 
					    </div> 
					    
					    <div class="myLogo " > 
					        <a class="navbar-brand rightText" href="#">菜单</a> |
					    </div> 
					    <div class="myLogo"> 
					        <a class="navbar-brand" href="#">会员中心</a> 
					    </div> 
					    <div class="myLogo" > 
					        <ul class="nav navbar-nav"> 
					            <li class="dropdown"> 
					                <a href="#" class="dropdown-toggle rightText" data-toggle="dropdown"> 
					                    Java <b class="caret"></b> 
					                </a> 
					                <ul class="dropdown-menu"> 
					                    <li><a href="#">个人资料</a></li> 
					                    <li class="divider"></li> 
					                    <li><a href="#">订单管理</a></li> 
					                    <li class="divider"></li> 
					                    <li><a href="#">退出登录</a></li> 
					                </ul> 
					            </li> 
					        </ul> 
					    </div> 
					    <span class="line"> | </span>
					    <div class="navbar-header myLogo"> 
					        <a class="navbar-brand" href="#">我的卡券(7)</a> 
					    </div> 
					    <div class="MyOrder">   
					        <a class="" href="#">继续点餐</a> 
					    </div> 
					   
					</nav>
				</div>'`,
            //需要传的值，需再props内注明
            props:['number_f', 'mydata'],
            data: function () {
                return {
                    number:this.number_f,
                    noprop:''
                };
            },
            mounted:function () {
                console.log(this.$el);
                this.noprop =  this.$el.dataset.noprop;
                this.$el.dataset.noprop = '新的值';
                console.log('我是一个组件');
            }
        }
    );
    Vue.component(
        'my-page-header',  //自定义的标签名
        { 
            //标签内容
            template:`<ul class="nav nav-pills">
                        <li><a href="">菜单1</a></li>
                        <li><a href="">菜单2</a></li>
                        <li><a href="">菜单3</a></li>
                        <li><a href="">菜单4</a></li>
                    </ul>`
        }
    );
    let v = new Vue({
        el:'#app',
        data:{
            number:'16055280'
        },
        mounted:function () {
            console.log('根实例');
        },
        components:{   
            'my-self-tag':{
                template:`<span>私有的标签</span>`
            }
        }
    });
    console.log(v);
}

function myvue (argument) {
    new Vue({
        el:'#app'
    });
}