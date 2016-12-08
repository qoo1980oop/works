// JavaScript Document

$(function() {
    //input 密碼欄位從文字變成數字
    $("#text2number").focus(function() { $(this).attr('type', 'number') })
    $("#text2number").focusout(function() { $(this).attr('type', 'text') })
        /*$("#input-password").click(function(){
        	$(this).attr('type','number');
        })*/
        //eye 隱藏或顯示密碼
    $(".eye").click(function() {
        if ($(this).hasClass("eye_close")) {
            $(this).parent().find("input").attr('type', 'text');
            $(this).removeClass("eye_close")
        } else {
            $(this).parent().find("input").attr('type', 'password');
            $(this).addClass("eye_close")
        }
    })
})

// pop overlay 開關
// $(function() {
//     //----- OPEN
//     $('[data-popup-open]').on('click', function(e) {
//         var targeted_popup_class = jQuery(this).attr('data-popup-open');
//         $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);

//         e.preventDefault();
//     });

//     //----- CLOSE
//     $('[data-popup-close]').on('click', function(e) {
//         var targeted_popup_class = jQuery(this).attr('data-popup-close');
//         $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

//         e.preventDefault();
//     });
// });

$(document).ready(function(){
    $(".openbtn").click(function(){
          // $(".blue_overlay").show();
          $(".blue_overlay").css({ "display": "block", "opacity": "0" }).animate({ "opacity": "1" }, 200);
    });

    $(".close").click(function(){
          // $(".blue_overlay").css({ "display": "none", "opacity": "1" }).animate({ "opacity": "0" }, 200);
          $(".blue_overlay").hide();
    });
});


$(function(){
		// 幫 div.qa_title 加上 hover 及 click 事件
		// 同時把兄弟元素 div.qa_content 隱藏起來
		$('.qaContent ul.accordionPart li div.qa_title').hover(function(){
			$(this).addClass('qa_title_on');
		}, function(){
			$(this).removeClass('qa_title_on');
		}).click(function(){
			// 當點到標題時，若答案是隱藏時則顯示它；反之則隱藏
			$(this).next('div.qa_content').slideToggle();
		}).siblings('div.qa_content').hide();

		$('.qaContent ul.accordionPart li div.qa_content:first').show();
	});