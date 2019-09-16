

$(window).scroll(function(){
let scrolltop = $(window).scrollTop();
    if(scrolltop > 180)
        {
            $("#NAV").css("backgroundColor" , "rgba(255,255,255, 0.7)");
            $(".navbar-nav").css("marginLeft" , "67vw");
            $(".sign-form").css("marginLeft" , "67vw");
            $(".sign-Up").css("marginLeft" , "62vw");



        }
    else {
            $("#NAV").css("backgroundColor" , "transparent" );
            $(".navbar-nav").css("marginLeft" , "0%");
            $(".sign-form").css("marginLeft" , "0vw");
            $(".sign-Up").css("marginLeft" , "0vw");
    }
})

$(".Nbtn").click(function(){
    if( $(".sign-Up").css("display" ,"none")){
             $(".sign-form").css("visibility" , "visible");

            $(".sign-form").fadeToggle(2000);
        if ( $(".about").css("filter") == "none")
        {
    $(".about").css("filter","blur(10px)");
    $(".about").css("-webkit-filter","blur(10px)");
    $(".patients").css("filter","blur(10px)");
    $(".patients").css("-webkit-filter","blur(10px)");
    $(".Quick-start").css("filter","blur(10px)");
    $(".Quick-start").css("-webkit-filter","blur(10px)");       
    $(".Hstart").css("filter","blur(10px)");
    $(".Hstart").css("-webkit-filter","blur(10px)");
    $(".mobile").css("filter","blur(10px)");
    $(".mobile").css("-webkit-filter","blur(10px)");
    $(".footer").css("filter","blur(10px)");
    $(".footer").css("-webkit-filter","blur(10px)");

    }
    else {
    $(".about").css("filter","none");
    $(".patients").css("filter","none");
    $(".Quick-start").css("filter","none");
    $(".Hstart").css("filter","none");
    $(".about").css("-webkit-filter","none");
    $(".patients").css("-webkit-filter","none");
    $(".Quick-start").css("-webkit-filter","none");
    $(".Hstart").css("-webkit-filter","none");
    $(".mobile").css("-webkit-filter","none");
    $(".mobile").css("-webkit-filter","none");
        $(".footer").css("-webkit-filter","none");
    $(".footer").css("-webkit-filter","none");
    }
    }
else {             

            $(".sign-form").css("display" , "none");


    
}
})
$("#Nbtn2").click(function(){
    $(".LoggedIn").fadeToggle(1000);

})

$(".SUp").click(function(){
     $(".sign-form").css("visibility" , "hidden");
             $(".sign-Up").css("visibility" , "visible");

$(".sign-Up").fadeToggle(2000);
    


})
$(".Lredirect").click(function(){
         $(".sign-Up").css("visibility" , "hidden");
             $(".sign-form").css("visibility" , "visible");

})
$(".Pbtn").click(function(){
         $(".sign-Up").fadeIn(2000);
        if ( $(".about").css("filter") == "none")
        {
    $(".about").css("filter","blur(10px)");
    $(".about").css("-webkit-filter","blur(10px)");
    $(".patients").css("filter","blur(10px)");
    $(".patients").css("-webkit-filter","blur(10px)");
    $(".Quick-start").css("filter","blur(10px)");
    $(".Quick-start").css("-webkit-filter","blur(10px)");       
    $(".Hstart").css("filter","blur(10px)");
    $(".Hstart").css("-webkit-filter","blur(10px)");

    }
    else {
    $(".about").css("filter","none");
    $(".patients").css("filter","none");
    $(".Quick-start").css("filter","none");
    $(".Hstart").css("filter","none");
    $(".about").css("-webkit-filter","none");
    $(".patients").css("-webkit-filter","none");
    $(".Quick-start").css("-webkit-filter","none");
    $(".Hstart").css("-webkit-filter","none");
    }

})


$(document).ready(function () {
    $("#load").fadeOut(2500,function(){
       $("body").css("overflow", "auto");
 
    });
 });


 $(window).scroll(function () { 
    let st = $(window).scrollTop();
   

    if (st > 500) 
    {
       $("#btnUp").fadeIn(500);  
    } 
    else
    {
      $("#btnUp").fadeOut(500);
    }



 });

 $("#btnUp").click(function (){
    $("body,html").animate({scrollTop:0},1000)
})

