$(function(){
$(document).ready(function()
{
	
    // Big Banner 幻燈片
    $('.big-banner-slider').unslider({
        autoplay: true,
        infinite: true 
    });
   
    
    
});



/*用戶評論2*/
$(function(){
	var $block = $('#block2'),
		$li = $('ul li', $block), 
		_height = $li.outerHeight(), 
		speed = 2000, 
		index = 0;

	var _first = $li.eq(1).html();
	
	$block.children('ul').append('<li>' + _first + '</li>');
	var $li = $('ul li', $block);

	function pull(){
		index = (index + 1) % $li.length;
		$block.animate({
			scrollTop: index * _height
		}, function(){
			if(index ==	$li.length - 1){
				index = 0;
				$block.scrollTop(0);
			}
		});		
		setTimeout(pull, speed);
	}
	
	setTimeout(pull, speed);
});


$("#ServiceNumber1").mouseenter(function(){
	$(".ServiceMove").animate({left:"50px"});
});
$("#ServiceNumber2").mouseenter(function(){
	$(".ServiceMove").animate({left:"120px"});
});

});

// smooth anchor tag scrolling
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': ($target.offset().top
        )-95}, 900, 'swing', function() {
            window.location.hash = target;
        });
    });
});

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
		// 預設顯示第一個 Tab
		var _showTab = 0;
		var $defaultLi = $('ul.tabs li').eq(_showTab).addClass('active');
		$('.tab_content').eq($defaultLi.index()).siblings().hide();
		
		// 當 li 頁籤被點擊時...
		// 若要改成滑鼠移到 li 頁籤就切換時, 把 click 改成 mouseover
		$('ul.tabs li').mouseover(function() {
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
	});
	

		
$(window).load(function() {
    $("#flexiselDemo1").flexisel();
    $("#flexiselDemo2").flexisel({
        visibleItems: 4,
        itemsToScroll: 1,
        animationSpeed: 200,
        infinite: true,
        navigationTargetSelector: null,
        autoPlay: {
            enable: false,
            interval: 5000,
            pauseOnHover: true
        },
        responsiveBreakpoints: { 
            portrait: { 
                changePoint:480,
                visibleItems: 1,
                itemsToScroll: 1
            }, 
            landscape: { 
                changePoint:640,
                visibleItems: 2,
                itemsToScroll: 2
            },
            tablet: { 
                changePoint:868,
                visibleItems: 3,
                itemsToScroll: 3
            }
        }
    });
    $("#flexiselDemo3").flexisel({
        visibleItems: 4,
        itemsToScroll: 1,         
        autoPlay: {
            enable: false,
            interval: 5000,
            pauseOnHover: true
        } ,
		responsiveBreakpoints: { 
            portrait: { 
                changePoint:480,
                visibleItems: 1,
                itemsToScroll: 1
            }, 
            landscape: { 
                changePoint:640,
                visibleItems: 2,
                itemsToScroll: 2
            },
            tablet: { 
                changePoint:900,
                visibleItems: 4,
                itemsToScroll: 1
            } 
			}     
    });
    
    $("#flexiselDemo4").flexisel({
        visibleItems: 1,
        itemsToScroll: 1,         
        autoPlay: {
            enable: true,
            interval: 5000,
            pauseOnHover: true
        }            
    });    
    
});	

$(document).ready(function() {	
			/*
			*   Examples - various
			*/

			$(".various1").fancybox({
				'titlePosition'		: 'inside',
				'transitionIn'		: 'none',
				'transitionOut'		: 'none'
				
			});
			
		});	
		
		
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "fade"
  });
});		
		
		