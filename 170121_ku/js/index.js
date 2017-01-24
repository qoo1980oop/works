// JavaScript Document

 $(document).ready(function(){
 	$(window).load(function() {


	   	$(".logo1").css({'opacity':'0','margin-top':'0px',});
		$(".logo2").css({'opacity':'0','margin-top':'-50px',});
		$(".logo3").css({'opacity':'0','margin-top':'150px',});

		$(".master_slider").css({'opacity':'0',});
		$(".dot1,.dot2,.dot3").css({'opacity':'0',});
		
		
		$(".master_slider").animate({"marginTop": "0px","opacity": "1"}, {duration: 2000, easing: "easeOutExpo"});

		$("#index_wrapper #master .mouse").click(function(){
			$("body,html").stop().animate({ scrollTop: $(".start").offset().top }, { duration: 800,  easing: "swing" });
		});
		
        setTimeout(function(){
            $(".logo1").addClass("fadeInDown2 animated");
            setTimeout(function(){
            	$(".dot1").addClass("dot_animate");
            }, 100);	
            setTimeout(function(){
            	$(".dot2").addClass("dot_animate");
            }, 500);
            setTimeout(function(){
            	$(".dot3").addClass("dot_animate");
            }, 900);
          
        }, 1000);



		$(".logo2").delay(500).fadeIn('1500').animate({"marginTop": "0px","opacity": "1"}, {duration: 1500, easing: "easeOutExpo"});
		$(".logo3").delay(500).fadeIn('1500').animate({"marginTop": "0px","opacity": "1"}, {duration: 1500, easing: "easeOutExpo"});

		setTimeout(function(){
			$("#index_wrapper #master .mouse .mouse_line2").stop().animate({height:'61px'},500);
			$("#index_wrapper #master .mouse .mouse_line").stop().animate({height:'57px'},500,function(){
					$(".stroke circle").css({'stroke-dashoffset': 0});
			            setTimeout(function(){
				            $("#index_wrapper #master .mouse .mouse_icon").addClass("fadeIn animated");
				        }, 350);
			            setTimeout(function(){
				            $("#index_wrapper #master .mouse .arrow").stop().animate({opacity:1},500);
				        }, 800);		
					
			});

		}, 1200);	

	

                  var window_w = $(window).width();  
                  var window_h = $(window).height();  
				  

				 $('#index_wrapper .start .title').waypoint(function() {
			        $("#index_wrapper .start .title").addClass("animated fadeInUp ");

			        }, { offset:window_h/2+200 });


				 $("#index_wrapper .timeline li.event").waypoint(function() {
			        //$(this).addClass("fadeIn animated").css({opacity:1});
			        _this=$(this);
			        setTimeout(function(){
		                	_this.css({'background-size':'1px 100%'});
		            }, 500);
			     }, { offset:window_h/2+200 });



				 $('.e0').waypoint(function() {
			        $('.e0').addClass("now");
				 	$('.e0').css({'background-size':'1px 100%'});
	                $(".p1 .order1_2").addClass("animated2 zoomOut");
					   
						setTimeout(function(){
		                    $(".p1 .order1").addClass("animated zoomIn");
		                }, 0);
	                    setTimeout(function(){
		                    $(".p1 .order1 .circle_icon").addClass("animated fadeInUp");
		                    $(".p1 h2").addClass("animated fadeInUp");
		                }, 1000);
		                setTimeout(function(){
		                    $(".p1 p").addClass("animated fadeInUp");
		                }, 800);
			      }, { offset:window_h/2 });



				 $('.e1').waypoint(function() {
				 	$('.e1').addClass("now");
		            $('.e1').css({'background-size':'1px 100%'});
			        $(".p2 .order1_2").addClass("animated2 zoomOut");
						setTimeout(function(){
		                    $(".p2 .order1").addClass("animated zoomIn");
		                }, 0);
	                    setTimeout(function(){
		                    $(".p2 .order1 .circle_icon").addClass("animated fadeInUp");
		                    $(".p2 h2").addClass("animated fadeInUp");
		                }, 800);
		                setTimeout(function(){
		                    $(".p2 p").addClass("animated fadeInUp");
		                }, 1000);
			        }, { offset:window_h/2 });
				

				 $('.e2').waypoint(function() {
		            $('.e2').addClass("now");
		            $('.e2').css({'background-size':'1px 100%'});
 				    $(".p3 .order2_2").addClass("animated2 zoomOut");
						setTimeout(function(){
		                    $(".p3 .order1").addClass("animated zoomIn");
		                }, 0);
	                    setTimeout(function(){
		                    $(".p3 .order1 .circle_icon").addClass("animated fadeInUp");
		                    $(".p3 h2").addClass("animated fadeInUp");
		                }, 800);
		                setTimeout(function(){
		                    $(".p3 p").addClass("animated fadeInUp");
		                }, 1000);
			        }, { offset: window_h/2-200 });


				 $('.e3').waypoint(function() {
		            $('.e3').addClass("now");
		            $('.e3').css({'background-size':'1px 100%'});
 				    $(".p4 .order2_2").addClass("animated2 zoomOut");
						setTimeout(function(){
		                    $(".p4 .order1").addClass("animated zoomIn");
		                }, 0);
	                    setTimeout(function(){
		                    $(".p4 .order1 .circle_icon").addClass("animated fadeInUp");
		                    $(".p4 h2").addClass("animated fadeInUp");
		                }, 800);
		                setTimeout(function(){
		                    $(".p4 p").addClass("animated fadeInUp");
		                }, 1000);
			        }, { offset: window_h/2-200 });
				 

				 $('.e4').waypoint(function() {
		            $('.e4').addClass("now");
		            $('.e4').css({'background-size':'1px 100%'});
 				    $(".p5 .order2_2").addClass("animated2 zoomOut");
						setTimeout(function(){
		                    $(".p5 .order1").addClass("animated zoomIn");
		                }, 0);
			        }, { offset: window_h/2-200 });
				 
				 $('.e5').waypoint(function() {
		            $('.e5').addClass("now");
		            $('.e5').css({'background-size':'1px 100%'});
 				    $(".p6 .order2_2").addClass("animated2 zoomOut");
	                    setTimeout(function(){
		                    $(".p6 h2").addClass("animated fadeInUp");
		                }, 200);
		                setTimeout(function(){
		                    $(".p6 p").addClass("animated fadeInUp");
		                }, 400);
						$('.e6').addClass("now");
			        }, { offset: window_h/2-200 });

					
	// $('.order3').waypoint(function() {
			 //        $(".order3").addClass("animated zoomIn");
			 //        }, { offset: 500 });
					
				//  $('.order3_2').waypoint(function() {
			 //        $(".order3_2").addClass("animated2 zoomOut");
			 //        }, { offset: 500 });
					
				$('.order4').waypoint(function() {
			        $(".order4").addClass("animated slideInUp");
			        }, { offset: 800 });
					
					
				// $('.order5').waypoint(function() {
			 //        $(".order5").addClass("opa_ani bg-scale");
			 //        }, { offset: 1000 });
					
				$('.order6').waypoint(function() {
			        $(".order6").addClass(" animated fadeInUp");
			        setTimeout(function(){
		                    $("#index_wrapper .stage2 .board h4").addClass("animated fadeInUp");
		                    $("#index_wrapper .stage2 .board p").addClass("animated fadeInUp");
		            }, 800);
		            setTimeout(function(){
		                    $("#index_wrapper .stage2 .board .icon").addClass("animated fadeIn");
		            }, 1200);
			        
			     }, { offset: 500 });
					
				$('.order7').waypoint(function() {
			        $(".order7").addClass(" animated fadeIn");
			     }, { offset: 600 });


				$("#index_wrapper .stage3 .bxslider").waypoint(function() {
					setTimeout(function(){
		                 $("#index_wrapper .stage3 .bg2 .icon li").eq(0).addClass("fadeInUp animated");
		            }, 100);
		            setTimeout(function(){
		                 $("#index_wrapper .stage3 .bg2 .icon li").eq(1).addClass("fadeInUp animated");
		            }, 300);
		            setTimeout(function(){
		                 $("#index_wrapper .stage3 .bg2 .icon li").eq(2).addClass("fadeInUp animated");
		            }, 500);
		            setTimeout(function(){
		                 $("#index_wrapper .stage3 .bg2 .icon li").eq(3).addClass("fadeInUp animated");
		            }, 700);
		            setTimeout(function(){
		                 $("#index_wrapper .stage3 .bg2 .icon li").eq(4).addClass("fadeInUp animated");
		            }, 900);
		            setTimeout(function(){
		                 $("#index_wrapper .stage3 .bg2 .icon li").eq(5).addClass("fadeInUp animated");
		            }, 1100);
		            setTimeout(function(){
		                 $("#index_wrapper .stage3 .bg2 .icon li").eq(6).addClass("fadeInUp animated");
		            }, 1300);
					

			     }, { offset: 200 });




				$('.show1').waypoint(function() {
			        $(".show1").addClass(" animated fadeIn");
			        }, { offset: 800 });
					
				$('.show2').waypoint(function() {
			    $(".show2").addClass(" animated fadeIn");
			        }, { offset: 650 });
					
				$('.show2_2').waypoint(function() {
			    $(".show2_2").addClass("ani");
			        }, { offset: 650 });
					
				$('.show3').waypoint(function() {
			    $(".show3").addClass(" animated fadeIn");
			        }, { offset: 550 });
					
				$('.show3_1').waypoint(function() {
			    $(".show3_1").addClass(" animated fadeIn");
			        }, { offset: 650 });
					
				$('.show3_2').waypoint(function() {
			    $(".show3_2").addClass("ani");
			        }, { offset: 650 });
					
				$('.show4').waypoint(function() {
			    $(".show4").addClass(" animated fadeIn");
			        }, { offset: 450 });
					
				$('.show4_2').waypoint(function() {
			    $(".show4_2").addClass("ani");
			        }, { offset: 650 });
				
				$('.show5').waypoint(function() {
			    $(".show5").addClass(" animated fadeIn");
			        }, { offset: 500 });
					
				$('.show5_2').waypoint(function() {
			    $(".show5_2").addClass("ani");
			        }, { offset: 600 });
					
				$('.show6').waypoint(function() {
			    $(".show6").addClass(" animated fadeIn");
			        }, { offset: 500 });
					
				$('.show6_2').waypoint(function() {
			    $(".show6_2").addClass("ani");
			        }, { offset: 600 });
					
				//««ª½¹A³õtimeline¥X²{
				$('.time1').waypoint(function() {
			    $(".time1").addClass(" animated ");
			        }, { offset: 500 });
				$('.time1_2').waypoint(function() {
			    $(".time1_2").addClass(" animated fadeIn");
			        }, { offset: 600 });
				$('.time1_3').waypoint(function() {
			    $(".time1_3").addClass(" height_ani height");
			        }, { offset: 600 });
					
				$('.time2').waypoint(function() {
			    $(".time2").addClass(" animated ");
			        }, { offset: 500 });
				$('.time2_2').waypoint(function() {
			    $(".time2_2").addClass(" animated fadeIn");
			        }, { offset: 700 });
				$('.time2_3').waypoint(function() {
			    $(".time2_3").addClass(" height_ani_2 height");
			        }, { offset: 600 });
				$('.time3').waypoint(function() {
			    $(".time3").addClass(" animated ");
			        }, { offset: 500 });
				$('.time3_2').waypoint(function() {
			    $(".time3_2").addClass(" animated fadeIn");
			        }, { offset: 600 });
				$('.time3_3').waypoint(function() {
			    $(".time3_3").addClass(" height_ani height");
			        }, { offset: 600 });
					

				$('.time4_2').waypoint(function() {
			    $(".time4_2").addClass(" animated fadeIn");
			        }, { offset: 600 });
				$('.time4_3').waypoint(function() {
			    $(".time4_3").addClass(" height_ani height");
			        }, { offset: 600 });
					
				$('.time5_2').waypoint(function() {
			    $(".time5_2").addClass(" animated fadeIn");
			        }, { offset: 600 });
				$('.time5_3').waypoint(function() {
			    $(".time5_3").addClass(" height_ani height");
			        }, { offset: 600 });
				
				$('.time6').waypoint(function() {
			    $(".time6").addClass(" animated ");
			        }, { offset: 500 });
				$('.time6_2').waypoint(function() {
			    $(".time6_2").addClass(" animated fadeIn");
			        }, { offset: 700 });
				$('.time6_3').waypoint(function() {
			    $(".time6_3").addClass(" height_ani_2 height");
			        }, { offset: 600 });
					
					
				$('.time7_2').waypoint(function() {
			    $(".time7_2").addClass(" animated fadeIn");
			        }, { offset: 600 });
				$('.time7_3').waypoint(function() {
			    $(".time7_3").addClass(" height_ani height");
			        }, { offset: 600 });
					
				$('.time8_2').waypoint(function() {
			    $(".time8_2").addClass(" animated fadeIn");
			        }, { offset: 600 });
				$('.time8_3').waypoint(function() {
			    $(".time8_3").addClass(" height_ani height");
			        }, { offset: 600 });


				$("#index_wrapper .stage3 .bg1").waypoint(function() {

					$("#index_wrapper .stage3 .bg1 h1").addClass(" fadeInUp animated");

						setTimeout(function(){

		                    $("#index_wrapper .stage3 .bg1 p").addClass(" fadeInUp animated");

		                }, 500);


			    }, { offset: 600 });















	 });



                    $(window).scroll(function(event) {

                        var window_w = $(window).width();  
                        var window_h = $(window).height();  
                        offsetTop = $(window).scrollTop(); 
                        
                        	//$("#index_wrapper .start").stop().animate({backgroundpos:'100% '+offsetTop/10});
                        	 if($(".timeline .line_dot").length > 0){
                        	 	    tspan = (offsetTop-$(".timeline .line_dot").offset().top) ;

                        			$(".timeline .line_dot span").stop().animate({top:tspan+window_h/1.5});
                        	 }
 







                        	 $("#index_wrapper .start").stop().animate({backgroundPosition:'100% '+ -(offsetTop/10) +'px' });

                        	 if($(".stage2").length >0){
                                if( offsetTop+800 > $(".stage2").offset().top){ 

                                     st2_max=$(".st2img").height() - 645;
                                     csaino03_s = (offsetTop+800-$(".stage2").offset().top) /10;
                                     if(csaino03_s<st2_max){
                                        if(csaino03_s<0){csaino03_s=0};
                                        //$("#csaino03 img").css({ transform:"translate(0, "+ -csaino03_s +"px)"});
                                         //$("#csaino03 img").stop().animate({ transform:"translate(0, "+ -csaino03_s +"px)"});
                                          $("#index_wrapper .stage2_bg").stop().animate({backgroundPosition:'50% '+ (-csaino03_s) +'px' });
                                    }


                                }                       	 	
                        	 }


                        	 if($(".stage3").length >0){

                                if( offsetTop+800 > $(".stage3").offset().top ){ 

                                    stage3_p = (offsetTop+800-$(".stage3").offset().top) /10;
                                    stage3_p2 = (offsetTop+800-$(".stage3").offset().top) /8;
                                    $("#index_wrapper .stage3 .bg1_1").stop().animate({backgroundPosition:'100% '+ (stage3_p) +'px' });
                                    $("#index_wrapper .stage3 .bg1_2").stop().animate({backgroundPosition:'100% '+ (stage3_p2) +'px' });


                                }

                             }









                  });











 });