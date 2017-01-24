// JavaScript Document

$(document).ready(function(){  
    $("img").fadeIn(1000);
  });   

$(document).ready(function(){
	//如果menu有class"on",就不要使用淡入淡出效果
	$(".on div").removeClass();
	$(".on img:nth-child(1)").css({"display":"none"});
	$(".on img:nth-child(2)").css({"display":"block","opacity":1})
	
  $("._menu_hover").each(function(){
    $(this).css({'position':'relative','display':'block','float':'left'});
    var img1 = $(this).find('IMG').eq(0);
    img1.css({'z-index':'2','position':'absolute',top:0,left:0}).show();
    var img2 = $(this).find('IMG').eq(1);
    img2.css({'z-index':'1','position':'relative',top:0,left:0}).show();
    $(this).hover(
  	  function(){
        if ($(this).hasClass('stop')) return false;
        img1.stop().animate({opacity: '0'},200,function(){});
        img2.stop().animate({opacity: '1'},200,function(){});
  	  },
  	  function(){
        if ($(this).hasClass('stop')) return false;
        img1.stop().animate({opacity: '1'},500,function(){});
        img2.stop().animate({opacity: '0'},500,function(){});
      }
    );
  });
});
function set2Stop($obj){
  $('.stop').removeClass('stop');
  var img1 = $obj.find('IMG').eq(0);
  $obj.addClass('stop');
  img1.stop().animate({opacity: '0'},500,function(){});
}
function set2Start($obj){
  var img1 = $obj.find('IMG').eq(0);
  $obj.removeClass('stop');
  img1.stop().animate({opacity: '1'},800,function(){});
}