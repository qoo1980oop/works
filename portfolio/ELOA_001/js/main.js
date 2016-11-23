//選單按鈕
jQuery(document).ready(function($){
	$(".menu_icon").on("click", function(){
		$("#nav").slideToggle();
		$(this).toggleClass("active");
	});
	$("#to01link,#to02link,#to03link,#to04link,#to05link,#to06link,#to07link,#joinmember,#eloafacebook").click(function(){
	$("#nav").fadeToggle();	});
});



//滑動選單
$(function(){
	$('#tologolink').click(function(){ $('html,body').animate({scrollTop:$('#to01').offset().top-56}, "fast");}); 
	$('#to01link').click(function(){ $('html,body').animate({scrollTop:$('#to01').offset().top-56}, "fast");}); 
	$('#to02link').click(function(){ $('html,body').animate({scrollTop:$('#to02').offset().top-30}, "fast");}); 
	$('#to03link').click(function(){ $('html,body').animate({scrollTop:$('#to03').offset().top-30}, "fast");}); 
	$('#to04link').click(function(){ $('html,body').animate({scrollTop:$('#to04').offset().top-30}, "fast");}); 
	$('#to05link').click(function(){ $('html,body').animate({scrollTop:$('#to05').offset().top-30}, "fast");}); 
	$('#to06link').click(function(){ $('html,body').animate({scrollTop:$('#to06').offset().top-30}, "fast");}); 
	$('#to07link').click(function(){ $('html,body').animate({scrollTop:$('#to07').offset().top-30}, "fast");}); 	
});


//版頭影片JS
	youtubeset();
	function youtubeset() {
		var tag = document.createElement('script');
		tag.src = "https://www.youtube.com/iframe_api";
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
		var player;
	}
	function onYouTubeIframeAPIReady() {
		player = new YT.Player('video-obj', {
		height: '1280',  
		width: '720',  
			videoId: '5iPKKNkhCMM',
			playerVars: {
				autoplay: 1,        // 在讀取時自動播放影片
				controls: 0,        // 在播放器顯示暫停／播放按鈕
				showinfo: 0,        // 隱藏影片標題
				modestbranding: 1,  // 隱藏YouTube Logo
				loop: 1,            // 讓影片循環播放
				fs: 0,              // 隱藏全螢幕按鈕
				cc_load_policty: 0, // 隱藏字幕
				iv_load_policy: 3,  // 隱藏影片註解
				autohide: 0 ,// 當播放影片時隱藏影片控制列
				disablekb: 0, // 關閉鍵盤控制
				wmode: "transparent",
			},
			events: {
				'onReady': onPlayerReady,
				'onStateChange': onPlayerStateChange
			}
		});
	}
	function onPlayerReady(event) {
//    player.setPlaybackQuality('hd720'); // Here we set the quality (yay!)  
		player.setVolume(0);
		player.mute();
		event.target.playVideo();
		//	event.target.mute();
		event.target.setPlaybackQuality('hd720');
		$(".digimon_gnb .btn_jsTrig").click(function () {
			event.target.mute();
		});

		$("#popClose").click(function () {
			event.target.unMute();
		});
	}
	function onPlayerStateChange(event) {
		if (event.data == YT.PlayerState.PLAYING) {
//			event.target.setPlaybackQuality('hd720');
			event.target.setPlaybackQuality('360p');
			
		}
		if (event.data == YT.PlayerState.ENDED) {
			player.playVideo(); 
			
		}
	}
	var timer = setInterval(function () {
		var frameH = window.outerHeight;
		var frameW = window.outerWidth;
		//	$('#video-obj').css({'height':frameH }) ;
		//	$('#video-obj').css({'width':frameW }) ;
	}, 200);
	
//fancyBox
$(document).ready(function() {
$('.fitVideo').fancybox({
    'maxWidth'    : 800,
	'maxHeight'   : 600,
	'padding': 0,
	'scrolling'   : 'no',
	'type'    : 'iframe',
	
    helpers: {
        media: {},
        title: {
            type: 'inside'
        },
	    overlay: {
    	 	locked: false,
		    css : { 'overflow' : 'hidden' }  
	    }		
    },
	youtube : {
	autoplay: 1,
	hd: 1,
	vq: 'hd720'
	},
    fitToView: false,
    aspectRatio: true,
    maxWidth: "100%",
    maxHeight: "100%",
    beforeLoad: function() {
        this.title = $(this.element).attr('caption');
    },
    afterLoad: function() {
        this.width = $(this.element).data("width");
        this.height = $(this.element).data("height");
    }
});
});

