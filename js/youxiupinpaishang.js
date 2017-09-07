$(document).ready(function(){
	$(".yx_bd3_btn_s1").click(function(){
		$("#yx_bd3_ul_1").css({"display":"block"});
		$("#yx_bd3_ul_2").css({"display":"none"});
		$("#yx_bd3_ul_3").css({"display":"none"});
		$("#yx_bd3_ul_4").css({"display":"none"});
		
		$(".yx_bd3_btn_s1").css({"background":"#f5f5f5"});
		$(".yx_bd3_btn_s2").css({"background":"white"});
		$(".yx_bd3_btn_s3").css({"background":"white"});
		$(".yx_bd3_btn_s4").css({"background":"white"});
		
	})
	$(".yx_bd3_btn_s2").click(function(){
		$("#yx_bd3_ul_2").css({"display":"block"});
		$("#yx_bd3_ul_1").css({"display":"none"});
		$("#yx_bd3_ul_3").css({"display":"none"});
		$("#yx_bd3_ul_4").css({"display":"none"});
		
		$(".yx_bd3_btn_s2").css({"background":"#f5f5f5"});
		$(".yx_bd3_btn_s1").css({"background":"white"});
		$(".yx_bd3_btn_s3").css({"background":"white"});
		$(".yx_bd3_btn_s4").css({"background":"white"});
	})
	$(".yx_bd3_btn_s3").click(function(){
		$("#yx_bd3_ul_3").css({"display":"block"});
		$("#yx_bd3_ul_2").css({"display":"none"});
		$("#yx_bd3_ul_1").css({"display":"none"});
		$("#yx_bd3_ul_4").css({"display":"none"});
		
		$(".yx_bd3_btn_s3").css({"background":"#f5f5f5"});
		$(".yx_bd3_btn_s2").css({"background":"white"});
		$(".yx_bd3_btn_s1").css({"background":"white"});
		$(".yx_bd3_btn_s4").css({"background":"white"});
	})
	$(".yx_bd3_btn_s4").click(function(){
		$("#yx_bd3_ul_4").css({"display":"block"});
		$("#yx_bd3_ul_2").css({"display":"none"});
		$("#yx_bd3_ul_3").css({"display":"none"});
		$("#yx_bd3_ul_1").css({"display":"none"});
		
		$(".yx_bd3_btn_s4").css({"background":"#f5f5f5"});
		$(".yx_bd3_btn_s2").css({"background":"white"});
		$(".yx_bd3_btn_s3").css({"background":"white"});
		$(".yx_bd3_btn_s1").css({"background":"white"});
	})
	
})
