window.onload = function(){
    $(window).scroll(function(){
        var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
        // console.log(scrollT);
        var star2Top = $("#star").offset().top-$(window).height();
        if(scrollT > star2Top){
            $(".star").addClass("animated zoomIn show").removeClass("fade").css("animation-duration","1.5s");
        }
        var dio2Top = $("#diomand").offset().top-$(window).height();
        // console.log(toTop);
        if(scrollT > dio2Top){
            $(".diomand").addClass("animated zoomIn show").removeClass("fade").css("animation-duration","1.5s");
        }
        var world2Top = $("#diomand").offset().top+100;
        // console.log(toTop);
        if(scrollT > world2Top){
            $(".world").addClass("animated zoomIn show").removeClass("fade").css("animation-duration","1.5s");
            $(".a1").addClass("animated bounceInDown show").removeClass("fade").css("animation-duration","1.5s");
            $(".a2").addClass("animated bounceInRight show").removeClass("fade").css("animation-duration","1.5s");
            $(".a3").addClass("animated bounceInLeft show").removeClass("fade").css("animation-duration","1.5s");
            $(".a4").addClass("animated bounceInUp show").removeClass("fade").css("animation-duration","1.5s");
        }
    })

    $(function () {
        // 吸顶灯
        var nav = document.getElementsByTagName("header")[0];
        var navTop = nav.offsetTop;
        // 返回顶部
        // 获取要大于的高度
        var headheight = $("header").height();
        window.onscroll=function () {
            //获取浏览器滚轴滚动的距离
            var scrollTop = $(window).scrollTop();
            //当浏览器滚轴滚动的距离 大于 设定的高度时 显示nav
            if(scrollTop >= navTop){
                nav.style.width = "1520px";
                nav.style.position = "fixed";
                nav.style.top = "0";
                nav.style.left = "0";
                nav.style.zIndex = "100";
            }else{
                nav.style.position = "";
            }
            //当浏览器滚轴滚动的距离 大于 设定的高度时 显示“点击返回顶部”按钮，否则隐藏
            if(scrollTop > headheight){
                $('.back_top').show();
            } else {
                $('.back_top').hide();
            }
        };
        //点击返回顶部500ms的滑动效果
        $('.back_top').on('click',function () {
            $('html,body').animate({scrollTop:0},500);
        })
    })
}