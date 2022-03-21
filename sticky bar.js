$(window).scroll(function (event) {
    var height = $(window).height();
    var scroll = $(window).scrollTop();
    //console.log(scroll + " " + height);
    if(scroll > height){
     $(".sticky_cart").addClass("show");
    } else {
     $(".sticky_cart").removeClass("show");
    }
  });
  
  $("#btn-sticky-cart").click(function(){
  	$(".paymentButtonsWrapper #AddToCart").click();
  });
