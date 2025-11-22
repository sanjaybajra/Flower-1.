$(document).ready(function(){


    $(".flowername, .cart-icon ").hide();
$(".flowers").mouseenter(function(){
    $(".flowername, .cart-icon ").hide();
       $(this).find(".flowername").show(1000);
       $(this).find(".cart-icon ").show(1000);
       $(this).css("cursor","pointer");
});
$(".flowers").mouseleave(function(){
  $(this).find(".flowername , .cart-icon").hide(1000);
})

});