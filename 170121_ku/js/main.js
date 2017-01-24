// JavaScript Document


	$(function() {

                $(window).load(function() {
                  $("#load").animate({opacity:0},1000);
                  $("#content").animate({opacity:1},1000);
				  $(".menu_close").animate({opacity:0},1000);
				  $("#index_wrapper").animate({opacity:1},800);
				  $(".menu").css({opacity:1},1000);
				   //$("quality,.block_1").css({opacity:0,marginTop:-70},1000);
				  //品質認證
				  $(".image").css({opacity:0},1000);
				  $(".image").stop().animate({opacity:"1"},1500,"easeOutQuad");
				  //產品介紹
				  $(".hot_pdt").css({opacity:0});
				  $(".hot_pdt").stop().animate({opacity:"1"},1500,"easeOutQuad");
				  $(".footer").css({opacity:1});
				  //關於我們
				  // $("#about").css({opacity:0});
				  // $("#about").stop().animate({opacity:"1"},1500,"easeOutQuad");		

                  var window_w = $(window).width();  
                  var window_h = $(window).height();  


                  /*if($("#content").height() < window_h || $(window).width()<1050){
                  	$(".footer").addsClass("animated fadeIn");
                  }
				  $('.footer').waypoint(function() {
			        $(".footer").addClass("animated fadeIn");
			      }, { offset: window_h+200 });*/








                });

			});

			
/*選單hover效果動畫*/
	$(document).ready(function(e) {
        var window_w = $(window).width();  
        var window_h = $(window).height();  		
		//選單設定
		$(".menu").toggleClass("active");
		$(".menu").click(function() {  
        $(this).toggleClass("active");
       
        	setTimeout(function(){
                    $(".menu_content .link1").eq(0).addClass("active");
                    setTimeout(function(){
                    	$(".menu_content .link1").eq(0).find('img').addClass("bounceIn animated").removeClass("bounceOut");
                    }, 800);
            }, 500);
            setTimeout(function(){
                    $(".menu_content .link1").eq(1).addClass("active");
                    setTimeout(function(){
                    	$(".menu_content .link1").eq(1).find('img').addClass("bounceIn animated").removeClass("bounceOut");
                    }, 800);
            }, 700);
            setTimeout(function(){
                    $(".menu_content .link1").eq(2).addClass("active");
                    setTimeout(function(){
                    	$(".menu_content .link1").eq(2).find('img').addClass("bounceIn animated").removeClass("bounceOut");
                    }, 800);
            }, 900);
            setTimeout(function(){
                    $(".menu_content .link1").eq(3).addClass("active");
                    setTimeout(function(){
                    	$(".menu_content .link1").eq(3).find('img').addClass("bounceIn animated").removeClass("bounceOut");
                    }, 800);
            }, 1100);
            setTimeout(function(){
                    $(".menu_content .link1").eq(4).addClass("active");
                    setTimeout(function(){
                    	$(".menu_content .link1").eq(4).find('img').addClass("bounceIn animated").removeClass("bounceOut");
                    }, 800);
            }, 1300);
            setTimeout(function(){
                    $(".menu_content .link1").eq(5).addClass("active");
                    setTimeout(function(){
                    	$(".menu_content .link1").eq(5).find('img').addClass("bounceIn animated").removeClass("bounceOut");
                    }, 800);
            }, 1500);
            setTimeout(function(){
                    $(".menu_content .link1").eq(6).addClass("active");
                    setTimeout(function(){
                    	$(".menu_content .link1").eq(6).find('img').addClass("bounceIn animated").removeClass("bounceOut");
                    }, 800);
            }, 1700);
            setTimeout(function(){
                    $(".menu_content .link1").eq(7).addClass("active");
                    setTimeout(function(){
                    	$(".menu_content .link1").eq(7).find('img').addClass("bounceIn animated").removeClass("bounceOut");
                    }, 800);
            }, 1900);



        $(".menu_open").show().stop().animate({height:$(window).height()},980,"easeOutCirc");
        $(".menu_open").toggleClass("active");


		$(".menu").stop().css({opacity:"1"});
		$(".menu_close").stop().animate({opacity:"1"},2000,"easeOutQuad");
    });




	$(".menu_close").click(function() {  
        $(this).toggleClass("active");
        $(".menu_content .link1").removeClass("active");
        $(".menu_content .link1").find('img').addClass("bounceOut").removeClass("bounceIn");
       // $(".menu_open").slideToggle();
        setTimeout(function(){
            $(".menu_open").stop().animate({height:0},500,function(){
		        	$(".menu_open").hide();
		        });
        }, 900);
        
		$(".menu").stop().animate({opacity:"1"},4000,"easeOutQuad");
		$(".menu_close").stop().animate({opacity:"0"},2000,"easeOutQuad");
    });











		$("menu .circle").css('width' , '6');
		$(".menu").css('transform-origin' , 'center');
			var _this = $(this);
			var menu_hover = _this.find(".menu .circle");
			var menu_hover2 = _this.find(".menu");
			var menu_text = _this.find(".menu_link");
			$(".menu").hover(
				
	function(){
		  	$(".menu div").addClass("menu_active");
			// menu_hover.stop().animate({width:"5",margin:"0 0 5 3",height:"5"},300,"easeOutQuad");	
			// menu_hover2.stop().animate({width:"48"},500,"easeOutQuad");	
			// menu_text.stop().animate({opacity:"1"},300,"easeOutQuad");	
	 },
	 function(){
	 		$(".menu div").removeClass("menu_active");
			// menu_hover.stop().animate({width:"6",margin:"0 3 5 1",height:"6"},100,"easeOutQuad");
			// menu_hover2.stop().animate({width:"48"},500,"easeOutQuad");	
			// menu_text.stop().animate({opacity:"1"},500,"easeOutQuad");
		});

		
		//選單項目hover
		$(".menu_hover").each(function(){  
		
				var _this = $(this);
				var icon = _this.find(".menu_icon");
				var color = _this.find(".color");
				var link_t = _this.find(".link_t");
				
								
				
				$(this).hover(function(){
					icon.stop().animate({opacity:"0"},300,"easeOutQuad");	
					color.removeClass('zoomOut2 animated').addClass('menu_zoomIn').css({opacity:1});
					link_t.stop().animate({opacity:"1"},300,"swing");
				  },function(){
					icon.stop().animate({opacity:"1"},300,"easeOutQuad");	
					color.addClass("zoomOut2 animated").removeClass('menu_zoomIn').css({opacity:0});
					link_t.stop().animate({opacity:"0"},300,"swing");	 
				  });
			  });//end each

		
		//垂直農場快速連結hover
		$("._hover3").each(function(){  
		
				var _this = $(this);
				var factor = _this.find(".factor");
				var factor_on = _this.find(".factor_on");
				var hover_text = _this.find(".hover_text");				
				
				$(this).hover(
				function(){
					// factor.stop().animate({opacity:"0"},300,"easeOutQuad");	
					// factor_on.stop().animate({opacity: '1',top:-25},200);
					// hover_text.stop().animate({opacity:"1"},300,"swing");
					$(this).addClass("active");
					
				  },
				  function(){
					 // factor.stop().animate({opacity:"1"},300,"easeOutQuad");
					 // factor_on.stop().animate({opacity: '0',top:-40},200);
					 // hover_text.stop().animate({opacity:"0"},300,"easeOutQuad");	 
					 $(this).removeClass("active");
				  }
				);
			  });//end each
			  
		//會員step hover
		$("._hover").each(function(){ 				
				var _this = $(this);
				var member_hover = _this.find("._hover_bg");
				$(this).hover(
				
				function(){
					member_hover.stop().animate({opacity:"1"},500,"easeOutQuad");	
					$(this).css('color','#ffffff');		
					
				  },
				  function(){
					  member_hover.stop().animate({opacity:"0"},500,"easeOutQuad");
					  $(this).css('color','#557f00');	
	 
				  }
				);
			  });//end each
			  
		//會員step2 hover
		$("._hover2").each(function(){ 				
				var _this = $(this);
				var member_hover = _this.find("._hover_bg");
				$(this).hover(
				
				function(){
					member_hover.stop().animate({opacity:"1"},500,"easeOutQuad");	
					$(this).css('color','#ffffff');	
	
					
				  },
				  function(){
					  member_hover.stop().animate({opacity:"0"},500,"easeOutQuad");
					  $(this).css('color','#494848');	
	 
				  }
				);
			  });//end each
		
	});
	
	//區塊逐步出現
	 $(window).scroll(function(event) {
                  
                  var window_w = $(window).width();  
                  var window_h = $(window).height();  
                  offsetTop = $(window).scrollTop(); 
				 
	//點選回到最頂-test
                  $("#top").click(function() {
                        $("html,body").stop().animate({ scrollTop: 0 }, { duration: 1000,  easing: "easeOutCubic" });
                        $("#top").stop().animate({ opacity : 1 });
                   }); 
				  

		});

