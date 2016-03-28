$(function(){
	//选项卡
	$("[data-tab] li").each(function(e){
		$(this).click(function(){
			$(this).addClass("act").siblings().removeClass("act");
			$("[data-act]").eq(e).show().siblings("[data-act]").hide();
		})
	})
	//阻止弹出框划动
	$("#mask").bind("touchmove",function(e){ 
		e.preventDefault();
	})
	//点击
	$("[data-click]").bind("click",function(e){
		var _dom = $(this).attr("data-click")||this;
		$(_dom).toggleClass("click");
	})

	//选择
	$("[data-select]").bind("click",function(e){
		var _dom = $(this).attr("data-select")||this;
		$(_dom).addClass("select").siblings("[data-select]").removeClass("select");
	})

	//悬浮效果
	$("[data-hover]").hover(function(e){
		var _dom = $(this).attr("data-hover")||this;
		$(_dom).addClass("hover");
	},function(){ 
		var _dom = $(this).attr("data-hover")||this;
		$(_dom).removeClass("hover");
	})

	



})