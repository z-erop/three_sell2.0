
$(function () {

    var reg = {
        tel : /^1[3-9]\d{9}$/,
        pwd : /^[\w!@#$%^&*()_+\-=/{}\[\]:";',.\/]{6,20}$/
    };
    var Input = document.querySelectorAll('.modal-body .re input');
    var aSpan = document.querySelectorAll('.modal-body .re span');
    var Re = document.querySelectorAll('.re')[0];
        for(var i=0;i<Input.length;i++){
            Input[i].i=i;
            if (i!=2){
                Input[i].onblur = function () {
                    console.log(Input[this.i],this.i);
                    var val = this.value;
                    if (val){
                        if (reg[this.getAttribute("data-rel")].test(val)){
                            this.className += ' border';
                            aSpan[this.i].style.display = 'none';

                        }else{
                            aSpan[this.i].style.display = 'block';
                            this.focus();
                        }
                    }
                }
            }else{
                Input[i].onblur = function () {
                    if (this.value){
                        if (this.value == Input[1].value){
                            this.className += ' border';
                            aSpan[this.i].style.display = 'none';
                            // $('#reg').attr("disabled",false);
                        }else {
                            aSpan[this.i].style.display = 'block';
                            Input[1].focus();
                            Input[1].value=  '';
                        }
                    }
                }
            }
        }


    $('#reg').click(function () {

        var inp1 = $('.inp1').val();
        var inp2 = $('.inp2').val();
        var inp3 = $('.inp3').val();
        console.log(inp1,inp2,inp3);
        if (inp1 && inp2 && inp3){
            $.ajax({
                url:'zhuce',
                type:'post',
                data:{name:inp1,pwd:inp2,pwd1:inp3},
                success:function (d) {
                     console.log(JSON.parse(d),d,typeof  d);
                    if (JSON.parse(d).flag){
                        alert('注册成功了');
                        // $('#myModal').css("display","none");
                        //  $('.modal-backdrop').css("display","none")
                        //
                        // $('.modal-content').css("display","none")
                    }else {
                        alert('你的账户已经被注册了');
                        $('.inp1').val('').focus();
                    }
                }
            })

        }


    })
    //登陆
    $('#login').click(function () {
        $('.modal-content').css("display","block")
        $('#myModal').css("display","block");
        $('.modal-backdrop').css("display","block")

        var name = $('.name1').val();
        var pwd = $('.pwd1').val();
        if ( name && pwd ){
            $.ajax({
                url:'login',
                type:'post',
                data:{name:name,pwd:pwd},
                success(d){
                    console.log(d);
                    $('.userName-con span').html(d.infor.user);

                    $('.btn-wrap')[0].innerHTML = '<h3>'+d.infor.user+'</h3>'
                }


            })
        }
    })

    //退出
    $('exitOut').click(function () {
        console.log(1)
    })
    console.log( typeof $('#flag').data('flag'))
    if ($('#flag').data('flag')){
        console.log('我的session出现了');

    }else{
        console.log('我的session不见了');
        $('.userName').css('display','none')
        // $('.userCard').css('display','none')
    }
});



