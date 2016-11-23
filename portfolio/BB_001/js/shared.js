// JavaScript Document
$(function(){  
	var timer;
	
	//calling jPreLoader function with properties
	//$('').jpreLoader({
	//splashID: "#jSplash",
	//splashFunction: function() {  //passing Splash Screen script to jPreLoader
	//$('#jSplash').children('section').not('.selected').hide();
	//}
	//})
/*	
	$('#p1box').tinyscrollbar();
	$('#p5box').tinyscrollbar();
	$('.ev1,.ev2,.ev3,.ev4,.ev5,.ev6,.ev7,.ev8,.btn_note4,.btn_note5,.btn_note6,.btn_ev1,.btn_ev2,.btn_ev3,.btn_ev4,.btn_ev5,.btn_ev6,.btn_ev7,.btn_ev8').hide();
	
*/	
	
	$(".waverider").delay(1400).fadeIn().css({ top:"-100px", left:"690px", opacity:0}).animate({ top:"-69px", left:"717px", opacity:1 });
	$(".slogan").delay(1700).fadeIn().css({ left:"200px", opacity:0}).animate({ left:"157px", opacity:1 });
	$("#btn_intro").delay(1800).fadeIn().css({ left:"200px", opacity:0}).animate({ left:"632px", opacity:1 });
	$(".subBtn").delay(1900).fadeIn().css({ bottom:"50px", opacity:0}).animate({ bottom:"82px", opacity:1 });
/*	
	$('.btn_ev1,.btn_ev2,.btn_ev3,.btn_ev4,.btn_ev5,.btn_ev6,.btn_ev7,.btn_ev8').fadeIn();
	
	$("#btn_intro").hover(function(){
		$("#btn_intro").css({left:"632px",opacity:1}).animate({ left:"622px", opacity:1 });
	},function(){
		$("#btn_intro").css({left:"622px",opacity:1}).animate({ left:"632px", opacity:1 });
	});	
	
	$('.btn_ev1').click(function(){
		$('.ev1,.blackbg').delay(100).fadeIn();
		$('.ev2,.ev3,.ev4,.ev5,.ev6,.ev7,.ev8,.btn_note4,.btn_note5,.btn_note6').fadeOut();
	})
	$('.btn_ev2').click(function(){
		$('.ev2,.blackbg').delay(100).fadeIn();
		$('.ev1,.ev3,.ev4,.ev5,.ev6,.ev7,.ev8,.btn_note4,.btn_note5,.btn_note6').fadeOut();
	})
	$('.btn_ev3').click(function(){
		$('.ev3,.blackbg').delay(100).fadeIn();
		$('.ev1,.ev2,.ev4,.ev5,.ev6,.ev7,.ev8,.btn_note4,.btn_note5,.btn_note6').fadeOut();
	})
	$('.btn_ev4').click(function(){
		$('.ev4,.blackbg,.btn_note4').delay(100).fadeIn();
		$('.ev1,.ev2,.ev3,.ev5,.ev6,.ev7,.ev8,.btn_note5,.btn_note6').fadeOut();
	})
	$('.btn_ev5').click(function(){
		$('.ev5,.blackbg,.btn_note5').delay(100).fadeIn();
		$('.ev1,.ev2,.ev3,.ev4,.ev6,.ev7,.ev8,.btn_note4,.btn_note6').fadeOut();
	})
	$('.btn_ev6').click(function(){
		$('.ev6,.btn_note6,.blackbg').delay(100).fadeIn();
		$('.ev1,.ev2,.ev3,.ev4,.ev5,.ev7,.ev8,.btn_note4,.btn_note5').fadeOut();
	})
	$('.btn_ev7').click(function(){
		$('.ev7,.blackbg').delay(100).fadeIn();
		$('.ev1,.ev2,.ev3,.ev4,.ev5,.ev6,.ev8,.btn_note3,.btn_note6').fadeOut();
	})
	$('.btn_ev8').click(function(){
		$('.ev8,.blackbg').delay(100).fadeIn();
		$('.ev1,.ev2,.ev3,.ev4,.ev5,.ev6,.ev7,.btn_note3,.btn_note6').fadeOut();
	})
	

	function jumpCtShow(){
	
	$('.jumpCt,.btn_zone,.ev1,.close,#btn_intro').fadeIn(300);
    $('.jumpCtBg').css('opacity',0.8);
	}
	$('#btn_intro').css('cursor','pointer').click(function(){
    jumpCtShow();
	$('.flash_visual').hide();
	})

	function jump(){
	}
	$(".various").fancybox({
		maxWidth	: 800,
		maxHeight	: 700,
		minWidth    : 600,
		minHeight   : 490,
		fitToView	: false,
		width		: '75%',
		height		: '70%',
		autoSize	: true,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});
*/	
	
	$("#wrapper").delay(500).fadeIn().css({ opacity:0}, 1000,"easeOutQuint").animate({ opacity:1 }, 1000,"easeOutQuint");
	$(".man1").delay(1000).fadeIn().css({ top:"29px", left:"500px", opacity:0}, 400).animate({ top:"29px", left:"-69px", opacity:1 }, 400);
	$(".man2").delay(1150).fadeIn().css({ top:"110px", left:"655px", opacity:0}, 400).animate({ top:"91px", left:"665px", opacity:1 }, 400);
	$(".man3").delay(1250).fadeIn().css({ top:"320px", right:"10px", opacity:0}, 400).animate({ top:"317px",right:"-19px", opacity:1 }, 400);
	$(".man4").delay(1150).fadeIn().css({ top:"140px", left:"-10px", opacity:0}, 400).animate({ top:"123px", left:"-53px", opacity:1 }, 400);
	$(".man5").delay(1150).fadeIn().css({ top:"30px", left:"214px", opacity:0}, 400).animate({ top:"14px", left:"214px", opacity:1 }, 400);
	$(".logo").delay(1600).fadeIn().css({ top:"-20px", left:"10px", opacity:0}, 500).animate({ top:"13px",left:"29px", opacity:1 }, 600);
	$(".logo2").delay(1600).fadeIn().css({ top:"-20px", left:"10px", opacity:0}, 600).animate({ top:"13px",left:"29px", opacity:1 }, 600);
	
	$(".slogan2").delay(1500).fadeIn().css({ top:"-200px", opacity:0}, 600,"easeOutBack").animate({ top:"272px", opacity:1 }, 500,"easeOutBack");
	
	$(".slogan1").delay(2100).fadeIn().css({ top:"622px", left:"70px", opacity:0}, 800,"easeOutElastic").animate({ top:"614px",left:"70px", opacity:1 }, 800,"easeOutElastic");
	$(".time").delay(2600).fadeIn().css({ top:"620px", right:"10px", opacity:0}, 1000,"easeOutBounce").animate({ top:"570px",right:"10px", opacity:1 }, 1000,"easeOutBounce");
	$("#MENU").delay(2000).fadeIn().css({ bottom:"200px", opacity:0}, 800,"easeOutQuint").animate({ bottom:"140px", opacity:1 }, 400,"easeOutBack");
	
	
	

    $("#n > a").click(function(){
		var index = $(this).index();
		//index==2 ? alert('敬請期待') : $(".pp").eq(index).animate({top:10}, 800,"easeInOutBack").siblings().animate({top:710}, 800,"easeInOutBack") 
		
		$(".pp").eq(index).animate({top:40}, 800,"easeInOutBack").siblings().animate({top:710}, 800,"easeInOutBack");
		
		
/*		
		//活動還沒開始

		if(index==2){
			alert("敬請期待");	
		}else{	
			$(".pp").eq(index).animate({top:10}, 800,"easeInOutBack").siblings().animate({top:710}, 800,"easeInOutBack");
		}
		
*/		
		
	});	


	$(".event02").click(function(){
		$(".digimon05").delay(600).fadeIn().css({ top:"170px", right:"5px", opacity:0}, 500).animate({ top:"150px",right:"15px", opacity:1 }, 500);});
	
	
	
	$(".event04").click(function(){
		$(".digimon02").delay(800).fadeIn().css({ top:"320px", right:"10px", opacity:0}, 600,"easeOutElastic").animate({ top:"300px",right:"25px", opacity:1 }, 600,"easeOutElastic");});
	
	$(".event06").click(function(){
		$(".digimon03").delay(800).fadeIn().css({ top:"190px", right:"30px", opacity:0}, 600,"easeOutElastic").animate({ top:"170px",right:"30px", opacity:1 }, 600,"easeOutElastic");});
	
	
	$(".close").click(function(){
  		$(".pp").animate({top:710}, 800,"easeInOutBack");
		$(".man1").fadeIn().css({ top:"29px", left:"500px", opacity:0}, 400).animate({ top:"29px", left:"-69px", opacity:1}, 400);
		$(".man2").delay(100).fadeIn().css({ top:"110px", left:"655px", opacity:0}, 400).animate({ top:"91px", left:"665px", opacity:1}, 400);
		$(".man3").delay(250).fadeIn().css({ top:"320px", right:"10px", opacity:0}, 400).animate({ top:"317px",right:"-19px", opacity:1}, 400);
		$(".man4").delay(400).fadeIn().css({ top:"140px",left:"-10px", opacity:0}, 400).animate({ top:"123px",left:"-53px", opacity:1}, 400);
		$(".man5").delay(500).fadeIn().css({ top:"30px",left:"214px", opacity:0}, 400).animate({ top:"14px",left:"214px", opacity:1}, 400);
		
		$(".time").delay(450).fadeIn().css({ top:"620px", right:"10px", opacity:0}, 500,"easeOutBounce").animate({ top:"585px",right:"10px", opacity:1}, 500,"easeOutBounce");
		
		return false;
	}
	);	
	
     //棟次棟

    $(document).ready(function () {
        $.firefly({images: ['images/1.jpg', 'images/2.jpg'], total: 5});
    });

		
		//改版活動
		var _showTab = 0;
		var $defaultLi = $('.tabs').eq(_showTab).addClass('active');
		$('.tab_content').eq($defaultLi.index()).siblings().hide();
		
		// 當 li 頁籤被點擊時...
		// 若要改成滑鼠移到 li 頁籤就切換時, 把 click 改成 mouseover
		$('.tabs').click(function() {
			// 找出 li 中的超連結 href(#id)
			var $this = $(this),
				_index = $this.index();
			// 把目前點擊到的 li 頁籤加上 .active
			// 並把兄弟元素中有 .active 的都移除 class
			$this.addClass('active').siblings('.active').removeClass('active');
			// 淡入相對應的內容並隱藏兄弟元素
			$('.tab_content').eq(_index).stop(false, true).fadeIn().siblings().hide();

			return false;
		}).find('a').focus(function(){
			this.blur();
		});
		
		
		
		//改版活動3
		var _showTab = 0;
		var $defaultLi = $('.tabs3').eq(_showTab).addClass('active');
		$('.tab_content3').eq($defaultLi.index()).siblings().hide();
		
		// 當 li 頁籤被點擊時...
		// 若要改成滑鼠移到 li 頁籤就切換時, 把 click 改成 mouseover
		$('.tabs3').click(function() {
			// 找出 li 中的超連結 href(#id)
			var $this = $(this),
				_index = $this.index();
			// 把目前點擊到的 li 頁籤加上 .active
			// 並把兄弟元素中有 .active 的都移除 class
			$this.addClass('active').siblings('.active').removeClass('active');
			// 淡入相對應的內容並隱藏兄弟元素
			$('.tab_content3').eq(_index).stop(false, true).fadeIn().siblings().hide();

			return false;
		}).find('a').focus(function(){
			this.blur();
		});
		
		//好康活動
		var _showTab = 0;
		var $defaultLi = $('.tabs2').eq(_showTab).addClass('active');
		$('.tab_content2').eq($defaultLi.index()).siblings().hide();
		
		// 當 li 頁籤被點擊時...
		// 若要改成滑鼠移到 li 頁籤就切換時, 把 click 改成 mouseover
		$('.tabs2').click(function() {
			// 找出 li 中的超連結 href(#id)
			var $this = $(this),
				_index = $this.index();
			// 把目前點擊到的 li 頁籤加上 .active
			// 並把兄弟元素中有 .active 的都移除 class
			$this.addClass('active').siblings('.active').removeClass('active');
			// 淡入相對應的內容並隱藏兄弟元素
			$('.tab_content2').eq(_index).stop(false, true).fadeIn().siblings().hide();

			return false;
		}).find('a').focus(function(){
			this.blur();
		});
});




