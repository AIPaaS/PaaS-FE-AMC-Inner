$(function(){
  //监控项配置加载loading
  $(".loading_one").bind("click",function(){
    $(".loading_one").addClass("loading_one_active");
  })
   //左边tab选项卡
  $(".data_tp li").each(function(i){
    $(this).click(function(){
      $(this).addClass("active").siblings().removeClass("active");
        var itemid = $(this).children('.getItemid').text();
        var itemtype = $(this).children('.getItemtype').text();
	    var unittype = $(this).children('.getunit').text();
	    var itemname = $(this).children('.getname').text();
	    post_func(itemid,itemtype,unittype,itemname);
      $(".diag_block:eq("+i+")").show().siblings(".diag_block").hide();
    })
  })
  //右边tab选项卡
  $(".diag_tab_tp li").each(function(i){
    $(this).click(function(){
      $(this).addClass("active").siblings().removeClass("active");
      $(".diag_tab_block:eq("+i+")").show().siblings(".diag_tab_block").hide();
    })
  })
//刷新页面
$(".loading_one").bind("click",function(){
	  var dockername = $(this).attr("name");
	  alert(dockername);
	  $.ajax({
			cache : true,
			async : false,
			type : "POST",
			dataType :"JSON",
			url : getContextPath()  +"/monitorInfo/update",
			data : {
				dockername:dockername
			},
			success: function(data){
				$(".data_tp").children("li").remove();
				$(".data_tp").append("<li class='active'><h3>CPU</h3><span class='getItemid' style='display:none;'>"+data[0].itemid+"</span>"+data[0].lastvalue+""+data[0].units+"<span class='getItemtype' style='display:none;'>"+data[0].value_type+"</span><span class='getunit' style='display:none;'>"+data[0].units+"</span><span class='getname'style='display:none;'>"+data[0].name+"</span> </li>");
				$(".data_tp").append("<li><h3>内存</h3><span class='getItemid' style='display:none;'>"+data[1].itemid+"</span>"+data[1].lastvalue+""+data[1].units+"<span class='getItemtype' style='display:none;'>"+data[1].value_type+"</span><span class='getunit' style='display:none;'>"+data[1].units+"</span><span class='getname'style='display:none;'>"+data[1].name+"</span> </li>");
				$(".data_tp").append("<li><h3>流量(I)</h3><span class='getItemid' style='display:none;'>"+data[2].itemid+"</span>"+data[2].lastvalue+""+data[2].units+"<span class='getItemtype' style='display:none;'>"+data[2].value_type+"</span><span class='getunit' style='display:none;'>"+data[2].units+"</span><span class='getname'style='display:none;'>"+data[2].name+"</span> </li>");
				$(".data_tp").append("<li><h3>流量(O)</h3><span class='getItemid' style='display:none;'>"+data[3].itemid+"</span>"+data[3].lastvalue+""+data[3].units+"<span class='getItemtype' style='display:none;'>"+data[3].value_type+"</span><span class='getunit' style='display:none;'>"+data[3].units+"</span><span class='getname'style='display:none;'>"+data[3].name+"</span> </li>");
			},
			error : function(data) {
				$(".data_tp").children("li").remove();
				$(".data_tp").append("<li class='active'><h3>CPU</h3><span>请稍后</span></li>");
				$(".data_tp").append("<li><h3>内存</h3><span>请稍后</span></li>");
				$(".data_tp").append("<li><h3>流量(I)</h3><span>请稍后</span></li>");
				$(".data_tp").append("<li><h3>流量(O)</h3><span>请稍后</span></li>");
			}
		});
 	 
			   var itemid =   $('.getItemid:first').text();
			   var itemtype = $('.getItemtype:first').text();
			   var unittype = $('.getunit:first').text();
			   var itemname = $('.getname:first').text();
	 	    post_func(itemid,itemtype,unittype,itemname);
	  alert("刷新成功！");
      $(".loading_one").removeClass("loading_one_active");
      //左边tab选项卡  刷新后重新绑定事件
      $(".data_tp li").each(function(i){
        $(this).click(function(){
          $(this).addClass("active").siblings().removeClass("active");
            var itemid = $(this).children('.getItemid').text();
            var itemtype = $(this).children('.getItemtype').text();
    	    var unittype = $(this).children('.getunit').text();
    	    var itemname = $(this).children('.getname').text();
    	    post_func(itemid,itemtype,unittype,itemname);
          $(".diag_block:eq("+i+")").show().siblings(".diag_block").hide();
        })
      })
})
  
 


})
function getContextPath(){
    //获取当前网址，如： http://localhost:8080/payweb/inedx.jsp
    var curWwwPath=window.document.location.href;
    //获取主机地址之后的目录，如： payweb/inedx.jsp
    var pathName=window.document.location.pathname;
    var pos2=curWwwPath.lastIndexOf(pathName);
    //获取主机地址，如： http://localhost:8080
    var localhostPaht=curWwwPath.substring(0,pos2);
    //获取带"/"的项目名，如：/payweb
    var projectName=pathName.substring(0,pathName.substr(1).indexOf('/')+1);
    if(projectName=='/paas-fe-amc-inner' || projectName=='/paas-fe-amc-inner'){
    	return localhostPaht+projectName;
    }
    return localhostPath;
}
//发送post请求 获取数据
function post_func(itemid,itemtype,unittype,itemname){
	    var lu =1;
	    if(unittype=="KB"||unittype=="Kbps")
	    	lu=1024;
	    if(unittype=="MB"||unittype=="Mbps")
	    	lu=1024*1024;
	    if(unittype=="GB"||unittype=="Gbps")
	    	lu=1024*1024*1024;
		var hourtime = new Array();
		var hourvalue = new Array();
		var daytime = new Array();
		var dayvalue = new Array();
		var weektime = new Array();
		var weekvalue = new Array();
		var montime = new Array();
		var monvalue = new Array();
		$.ajax({
			cache : true,
			async : false,
			type : "POST",
			dataType :"JSON",
			url : getContextPath()  +"/monitorInfo/getgraph",
			data : {
				itemid:itemid,
				value_type:itemtype
			},
			success: function(data){
				 var newvalue;
				 //小时数据
				 $(data[0]).each(function () {
					 hourtime.push(this.newclock);//时间传给曲线图的x轴坐标
					 if(Number(this.value)!= NaN)
						 {
						 newvalue = Number(Number(this.value/lu).toFixed(2));
						 hourvalue.push(newvalue);
						 }else{
							 hourvalue.push(this.value/lu);   //数值传给曲线图的y轴坐标
						 }
				 });
				//一天数据
				 $(data[1]).each(function () {
					 daytime.push(this.newclock);//时间传给曲线图的x轴坐标
					 if(Number(this.valueAvg)!= NaN)
						 {
						 newvalue = Number(Number(this.valueAvg/lu).toFixed(2));
						 dayvalue.push(newvalue);
						 }else{
							 dayvalue.push(this.valueAvg/lu);   //数值传给曲线图的y轴坐标
						 }
				 });
				//一周数据
				 $(data[2]).each(function () {
					 weektime.push(this.newclock);//时间传给曲线图的x轴坐标
					 if(Number(this.valueAvg)!= NaN)
						 {
						 newvalue = Number(Number(this.valueAvg/lu).toFixed(2));
						 weekvalue.push(newvalue);
						 }else{
							 weekvalue.push(this.valueAvg/lu);   //数值传给曲线图的y轴坐标
						 }
				 });
				//一月数据
				 $(data[3]).each(function () {
					 montime.push(this.newclock);//时间传给曲线图的x轴坐标
					 if(Number(this.valueAvg)!= NaN)
						 {
						 newvalue = Number(Number(this.valueAvg/lu).toFixed(2));
						 monvalue.push(newvalue);
						 }else{
							 monvalue.push(this.valueAvg/lu);   //数值传给曲线图的y轴坐标
						 }
				 });
			},
			error : function(data) {
				alert("图形生成异常");
			}
		});
	  hour_main(hourtime,hourvalue,unittype,itemname);
	  minute(daytime,dayvalue,unittype,itemname);
	  week(weektime,weekvalue,unittype,itemname);
	  month(montime,monvalue,unittype,itemname);
}