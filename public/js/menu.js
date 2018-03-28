
$(function () {

    //给第一个菜单加上默认样式
    $('.menu_list li a').eq(0).addClass('list_active');

    //购物盒中商品的加减
    $('#ico-jian').bind('click',function () {
        var num=$('#foodnum').val();
        num<=0?0:num=num-1;
        $('#foodnum').val(num);
    })
    $('#ico-add').bind('click',function () {
        var num=parseInt($('#foodnum').val());
        num=num+1;
        $('#foodnum').val(num);
    })
    //订单中的商品的加减
    $('#car-ico-jian').bind('click',function () {
        var num=$('#carnum').val();
        num<=0?0:num=num-1;
        $('#carnum').val(num);
    })
    $('#car-ico-add').bind('click',function () {
        var num=parseInt($('#carnum').val());
        num=num+1;
        $('#carnum').val(num);
    })

    // 打开购物盒，并弹出遮罩层
    $('.shoppingBox-left').bind('click',function () {
        $('.detailBox').css('display','none');
        $('.bigBg').css('display','block');
        $('.shopping-content').css('display','block');
    })
    //关闭购物盒，隐藏遮罩层
    $('.close-shopping-car').bind('click',function () {
        $('.bigBg').css('display','none');
        $('.shopping-content').css('display','none');
    })

    //加入购物车,向数据表订单中插入数据
    var map = new Map();
    $('.addtocar').bind('click',function () {
        var foodname=$('#foodname').html();
        var foodnum=$('#foodnum').eq(0).val();
        var foodimages=$('.food-iamge')[0].src;
        var foodprice=$('#foodprice').html();
        var fid=$('.detailBox').attr('fid');
        var date=new Date();
        var addtime=date.getFullYear()+'-'+date.getMonth()+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes();
        var content=foodname+'*'+foodnum;
        var listobj={foodname:foodname,foodnum:foodnum,foodimages:foodimages,foodprice:foodprice,content:content};
        if(map.get(fid)==null){
            map.set(fid,listobj);
        }else {
            map.get(fid).foodnum=parseInt(map.get(fid).foodnum)+parseInt(foodnum);
        }
        console.log(map);
    })
    //购物盒子的订单信息
    $('#gouwuCar').bind('click',function () {
        $('.shopping-item').remove();
        map.forEach(function (item) {
        var shoppping_item_div=document.createElement('div');
        shoppping_item_div.className='shopping-item';
        $('.shopping-content').append(shoppping_item_div);
        var item_box_top=document.createElement('div');
        item_box_top.className='item-box-top';
        shoppping_item_div.append(item_box_top);
        var item_bottom=document.createElement('div');
        item_bottom.className='item-bottom';
        item_bottom.innerHTML=item.foodname+'*'+item.foodnum;
        shoppping_item_div.append(item_bottom);
        var item_img_div=document.createElement('div');
        item_img_div.className='item-img';
        item_box_top.append(item_img_div);
        var img_pic=document.createElement('img');
        img_pic.src=item.foodimages;
        item_img_div.append(img_pic);
        var item_desc_div=document.createElement('div');
        item_desc_div.className='item-desc';
        item_box_top.append(item_desc_div);
        var shopping_item_right_div=document.createElement('div');
        shopping_item_right_div.className='add-cart-num shopping-item-right';
        item_box_top.append(shopping_item_right_div);
        var shopping_item_middle_div=document.createElement('div');
        shopping_item_middle_div.className='shopping-item-middle';
        item_desc_div.append(shopping_item_middle_div);
        var span01=document.createElement('span');
        span01.innerHTML=item.foodname;
        shopping_item_middle_div.append(span01);
        var brrr=document.createElement('br');
        shopping_item_middle_div.append(brrr);
        var food_price_span=document.createElement('span');
        food_price_span.className='food-price';
        food_price_span.innerHTML=item.foodprice;
        shopping_item_middle_div.append(food_price_span);
        var yuan_span=document.createElement('span');
        yuan_span.className='food-price';
        yuan_span.innerHTML='元';
        shopping_item_middle_div.append(yuan_span);
        var shopping_item_jian_div=document.createElement('div');
        shopping_item_jian_div.className='add-minus ico-jian shopping-item-jian car-ico-jian';
        shopping_item_jian_div.id='car-ico-jian';
        shopping_item_jian_div.innerHTML='-';
        shopping_item_right_div.append(shopping_item_jian_div);
        var item_num_div=document.createElement('div');
        item_num_div.className='add-num item-num';
        shopping_item_right_div.append(item_num_div);
        var num_little_input=document.createElement('input');
        num_little_input.className='num num-little';
        num_little_input.type='text';
        num_little_input.id='carnum';
        num_little_input.value=item.foodnum;
        item_num_div.append(num_little_input);
        var shopping_item_add_div=document.createElement('div');
        shopping_item_add_div.className='add-minus ico-add shopping-item-add car-ico-add';
        shopping_item_add_div.id='car-ico-add';
        shopping_item_add_div.innerHTML='+';
        shopping_item_right_div.append(shopping_item_add_div);

        })

    })
})