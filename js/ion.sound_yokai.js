//播放聲音用
$(document).ready(function(){
  $.ionSound({
	sounds: [
	 "01yokai_info01" , "01yokai_info02" , "01yokai_info03" ,
	 "02yokai_info01" , "02yokai_info02" , "02yokai_info03" ,
	 "03yokai_info01" , "03yokai_info02" , "03yokai_info03" ,
	 "04yokai_info01" , "04yokai_info02" , "04yokai_info03" ,
	 "05yokai_info01" , "05yokai_info02" , "05yokai_info03" ,
	 "06yokai_info01" , "06yokai_info02" , "06yokai_info03" ,
	],
    path: "sounds/"
  });
  
	$("#01yokai_info01").on("click", function(){ $.ionSound.play("01yokai_info01"); });
	$("#01yokai_info02").on("click", function(){ $.ionSound.play("01yokai_info02"); });
	$("#01yokai_info03").on("click", function(){ $.ionSound.play("01yokai_info03"); });
	
	$("#02yokai_info01").on("click", function(){ $.ionSound.play("02yokai_info01"); });
	$("#02yokai_info02").on("click", function(){ $.ionSound.play("02yokai_info02"); });
	$("#02yokai_info03").on("click", function(){ $.ionSound.play("02yokai_info03"); });

	$("#03yokai_info01").on("click", function(){ $.ionSound.play("03yokai_info01"); });
	$("#03yokai_info02").on("click", function(){ $.ionSound.play("03yokai_info02"); });
	$("#03yokai_info03").on("click", function(){ $.ionSound.play("03yokai_info03"); });
	
	$("#04yokai_info01").on("click", function(){ $.ionSound.play("04yokai_info01"); });
	$("#04yokai_info02").on("click", function(){ $.ionSound.play("04yokai_info02"); });
	$("#04yokai_info03").on("click", function(){ $.ionSound.play("04yokai_info03"); });
	
	$("#05yokai_info01").on("click", function(){ $.ionSound.play("05yokai_info01"); });
	$("#05yokai_info02").on("click", function(){ $.ionSound.play("05yokai_info02"); });
	$("#05yokai_info03").on("click", function(){ $.ionSound.play("05yokai_info03"); });
	
	$("#06yokai_info01").on("click", function(){ $.ionSound.play("06yokai_info01"); });
	$("#06yokai_info02").on("click", function(){ $.ionSound.play("06yokai_info02"); });
	$("#06yokai_info03").on("click", function(){ $.ionSound.play("06yokai_info03"); });
	
});

