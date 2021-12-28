$(function(){

    $('.sec_01_btn').click(function(){
        $('body,html').animate({'scrollTop':1277},1000);
    });
    $('.sec_02_btn').click(function(){
        $('body,html').animate({'scrollTop':2302},1000);
    });
    $('.sec_03_btn').click(function(){
        $('body,html').animate({'scrollTop':3302},1000);
    });
    $('.sec_04_btn').click(function(){
        $('body,html').animate({'scrollTop':4442},1000);
    });
    $('.sec_05_btn').click(function(){
        $('body,html').animate({'scrollTop':5482},1000);
    });
    $('.sec_06_btn').click(function(){
        $('body,html').animate({'scrollTop':6482},1000);
    });
    $('.sec_07_btn').click(function(){
        $('body,html').animate({'scrollTop':7482},1000);
    });
    $('.sec_08_btn').click(function(){
        $('body,html').animate({'scrollTop':8465},1000);
    });
    $('.sec_09_btn').click(function(){
        $('body,html').animate({'scrollTop':9615},1000);
    });
    $('.sec_10_btn').click(function(){
        $('body,html').animate({'scrollTop':10692},1000);
    });
    $('.sec_11_btn').click(function(){
        $('body,html').animate({'scrollTop':11832},1000);
    });
    $('.sec_12_btn').click(function(){
        $('body,html').animate({'scrollTop':12680},1000);
    });
    // ************************************************************************
    $('.quick li').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        let num = $(this).index();
        console.log(num);
        if(num==0){
            $('body,html').animate({'scrollTop':0},1000);
        }else if(num==1){
            $('body,html').animate({'scrollTop':1277},1000);
        }else if(num==2){
            $('body,html').animate({'scrollTop':2302},1000);
        }else if(num==3){
            $('body,html').animate({'scrollTop':3302},1000);
        }else if(num==4){
            $('body,html').animate({'scrollTop':4442},1000);
        }else if(num==5){
            $('body,html').animate({'scrollTop':5482},1000);
        }else if(num==6){
            $('body,html').animate({'scrollTop':6482},1000);
        }else if(num==7){
            $('body,html').animate({'scrollTop':7482},1000);
        }else if(num==8){
            $('body,html').animate({'scrollTop':8465},1000);
        }else if(num==9){
            $('body,html').animate({'scrollTop':9615},1000);
        }else if(num==10){
            $('body,html').animate({'scrollTop':10692},1000);
        }else if(num==11){
            $('body,html').animate({'scrollTop':11832},1000);
        }else if(num==12){
            $('body,html').animate({'scrollTop':12680},1000);
        }
    });
    // ************************************************************************
    //scroll 이벤트
    $(window).scroll(function(){
        var num = $(document).scrollTop();
        console.log(num);

        //스크롤바의 위치가 1277보다 크면 헤더를 고정시키고
        //스크롤바의 위치가 1277보다 작으면 헤더 고정 해제
        if(num >1277){
            $('.sec_02_header').addClass('on');
        }else{
            $('.sec_02_header').removeClass('on');
        }

        if(num >= 0 && num <= 1276){
            $('.quick li').removeClass('on');
            $('.quick li').eq(0).addClass('on')
        }else if(num >= 1277 && num <= 2301){
            $('.quick li').removeClass('on');
            $('.quick li').eq(1).addClass('on')
        }else if(num >= 2302 && num <= 3301){
            $('.quick li').removeClass('on');
            $('.quick li').eq(2).addClass('on');
        }else if(num >= 3302 && num <= 4441){
            $('.quick li').removeClass('on');
            $('.quick li').eq(3).addClass('on');
        }else if(num >= 4442 && num <= 5481){
            $('.quick li').removeClass('on');
            $('.quick li').eq(4).addClass('on');
        }else if(num >= 5482 && num <= 6481){
            $('.quick li').removeClass('on');
            $('.quick li').eq(5).addClass('on');
        }else if(num >= 6482 && num <= 7481){
            $('.quick li').removeClass('on');
            $('.quick li').eq(6).addClass('on');
        }else if(num >= 7482 && num <= 8464){
            $('.quick li').removeClass('on');
            $('.quick li').eq(7).addClass('on');
        }else if(num >= 8465 && num <= 9614){
            $('.quick li').removeClass('on');
            $('.quick li').eq(8).addClass('on');
        }else if(num >= 9615 && num <= 10691){
            $('.quick li').removeClass('on');
            $('.quick li').eq(9).addClass('on');
        }else if(num >= 10692 && num <= 11602){
            $('.quick li').removeClass('on');
            $('.quick li').eq(10).addClass('on');
        }else if(num >= 11603 && num <= 12161){
            $('.quick li').removeClass('on');
            $('.quick li').eq(11).addClass('on');
        }
        
        //스크롤바 위치가 800 - 2302이면 애니메이션이 실행 되고
        //아니면 실행 안 함
        if(num > 800 && num < 2302){
            $('.sec_02_case_img').addClass('on');
        }else if(num > 0 && num < 799){
            $('.sec_02_case_img').removeClass('on');
        }
        if(num > 1700 && num < 3302){
            $('.sec_03_cat').addClass('on');
            $('.sec_03_phone').addClass('on');
        }else if(num > 0 && num < 1699){
            $('.sec_03_cat').removeClass('on');
            $('.sec_03_phone').removeClass('on');
        }
        if(num > 2700 && num < 4442){
            $('.sec_04_img_wrap').addClass('on');
            $('.sec_04_img_02').addClass('on');
        }else if(num > 0 && num < 2699){
            $('.sec_04_img_wrap').removeClass('on');
            $('.sec_04_img_02').removeClass('on');
        }
        if(num > 4100 && num < 5481){
            $('.sec_05_img_02').addClass('on');
            $('.sec_05_img_03').addClass('on');
        }else if(num > 0 && num < 4099){
            $('.sec_05_img_02').removeClass('on');
            $('.sec_05_img_03').removeClass('on');
        }
        if(num > 4990 && num < 6481){
            $('.sec_06_cat').addClass('on');
            $('.sec_06_phone').addClass('on');
        }else if(num > 0 && num < 4989){
            $('.sec_06_cat').removeClass('on');
            $('.sec_06_phone').removeClass('on');
        }
        if(num > 6100 && num < 7481){
            $('.sec_07_img').addClass('on');
        }else if(num > 0 && num < 6099){
            $('.sec_07_img').removeClass('on');
        }
        if(num > 8000 && num < 8464){
            $('.sec_09_left').addClass('on');
            $('.sec_09_right').addClass('on');
            $('.sec_09_tit').addClass('on');
        }else if(num > 0 && num < 7999){
            $('.sec_09_left').removeClass('on');
            $('.sec_09_right').removeClass('on');
            $('.sec_09_tit').removeClass('on');
        }
    });

    

























});