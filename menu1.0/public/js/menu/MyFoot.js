window.onload = function () {
    vue();
    myvue();
}

function vue () {
    //注册一个全局组件  关键字components为私有组件
    Vue.component(
        //自定义的标签名
        'my-foot',
        {
            //标签内容   template 关键字
            template:`'<div class="footBox">
            <div class="myFoot">
			<div class="content">
		
			<div class="content-logo">
				<a href="">
					<div class="logo"></div>
				</a>
				<div class="phone">
					4000-123-456
				</div>
			</div>
			<div class="content-legal">
				
				必胜客宅急送不同城市或不同餐厅的送餐菜单和价格有所不同。 不同时段产品品项及价格有所不同。工作日特惠午餐及下午茶产品只在部分时段供应。详情以输入送餐地址后显示的实际供应的菜单为准。
			
			</div>
	
			<div class="content-one">
				<div class="link">
					<ul>
						<li><a href="">当季特选</a></li>
						<ul class="link-menu">
							<li><a href="">优惠套餐</a></li>
							<li>|</li>
							<li><a href="">比萨</a></li>
							<li>|</li>
							<li><a href="">意面</a></li>
							<li>|</li>
							<li><a href="">饭食</a></li>
							<li>|</li>
							<li><a href="">米线</a></li>
							<li>|</li>
							<li><a href="">小吃</a></li>
							<li>|</li>
							<li><a href="">饮料</a></li>
							<li>|</li>
							<li><a href="">汤</a></li>
							<li>|</li>
							<li><a href="">沙拉和蔬菜</a></li>
							<li>|</li>
							<li><a href="">甜点</a></li>
						</ul>
						<ul class="link-right">
							<li><a href="">会员中心</a></li>
							<li><a href="">帮助中心</a></li>
						</ul>
						
					</ul>
				</div>
			</div>
			<div class="content-two">

				<div class="left-yourname">
					
						版权所有 百胜咨询（上海）有限公司 
					
				</div>
				<div class="two-left">
					<ul class="two-ul">
						<li><a href="">法律条款</a></li>
						<li><a href="">经营公告</a></li>
						<li><a href="">隐私条款</a></li>
						<li><a href="">联系我们</a></li>
						<li><a href="">加入我们</a></li>
						
					</ul>
				</div>
				<div class="two-right">
					<a href="">沪ICP备 17029211-1号</a>
				</div>
			</div>
		
			</div>
		
		</div></div>'`,
            //需要传的值，需再props内注明
            props:['number_f', 'mydata'],
            data: function () {
                return {
                    number:this.number_f,
                    noprop:''
                };
            },
            mounted:function () {
               
            }
        }
    );
    
}

function myvue (argument) {
    new Vue({
        el:'#app'
    });
}