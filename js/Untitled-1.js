$("#seabtn").click(function () { 
    $("#roshta").fadeIn(500);
    $("#roshta").css("display", "flex");
});
$(".minu").click(function () { 
    $("#roshta").fadeOut(500);

});
$(".fa-minus").click(function () { 
    $(".feeee").fadeIn(500);
    $(".feeee").css("display", "flex");

});

$(".btnn").click(function () { 
    $(".feeee").fadeOut(500);

});
//$('#outerdiv div:not(#innerdiv2)')

$(".main").css("filter","blur(10px)");
$(".tutorial1").click(function(){
    $(".tutorial1").css("display","none");
    $(".tutorial2").css("display","block");
    $(".main").css("filter","blur(0px)");
    $('#one').attr('size',5);
})

$(".tutorial2").click(function(){
    $(".tutorial2").css("display","none");
    $('#one').attr('size',1);
})
