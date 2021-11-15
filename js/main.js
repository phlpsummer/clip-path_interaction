const $bg = $("#visual main .bg");
const $main = $("#visual main .mainImg");
const $smallMain = $("#visual main .smallMain");
const $largeMain = $("#visual main .largeMain");
let num = 1;
let isDone = true;


$(".btnNext").on("click",function(){
    if(isDone) {
        isDone = false;

        $bg.children("li").fadeOut(500);
        $bg.children("li").first().delay(500).appendTo($bg);
        $bg.children("li").eq(1).delay(3500).fadeIn(500,function(){
            isDone=true;
        });
    
        $largeMain.children("li").removeClass("on");
        setTimeout(function(){
            $smallMain.children("li").removeClass("on");
        }, 500);
    
        setTimeout(function(){
            if(num<2) {
                $smallMain.children("li").eq(num+1).delay(1000).addClass("on");
                $largeMain.children("li").eq(num+1).delay(1000).addClass("on");
                num++;
            } else {
                num=0;
                $smallMain.children("li").eq(num).delay(1000).addClass("on");
                $largeMain.children("li").eq(num).delay(1000).addClass("on");
            }
        }, 3000);
    }




});