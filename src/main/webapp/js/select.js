var lastLogId;
var lastLogTime;
var lastLogId_ud;
var lastLogTime_ud;
$(function() {
	// 获取s1的位置 并由此设定返回按钮的位置
	x = $("#s1").offset();
	$("#rt").css("top", x.top);
	$("#rt").css("opacity", 0.5);
	$("#rt").hover(function() {
		$("#rt").css("opacity", "0.99");
	}, function() {
		$("#rt").css("opacity", "0.5");
	});

	$('.phone_name').delegate('.hoverTab', 'click', function(e) {
		e.stopPropagation();
	});
	$('.phone_name .drop_app ul').delegate(
			'a',
			'click',
			function() {
				$(this).parent().parent().parent().prev('span').children('a')
						.text($(this).text());
			});
	$('.phone_name').delegate('.hoverTab', 'click', function(e) {
		$(this).css({
			'border-bottom' : 'none',
			"border-bottom-left-radius" : "0px",
			"border-bottom-right-radius" : "0px"
		});
		$(this).next('div').css("visibility", "visible");
		var sibling = $(this).parent().parent().siblings();
		sibling.find('.hoverTab').css('border-bottom', 'solid 1px #000');
		sibling.find('.hoverTab').next().css("visibility", "hidden");
	});
	$('body').click(function() {
		$('.phone_name .drop_app').css("visibility", "hidden");
		$('.hoverTab').css({
			'border-bottom' : 'solid 1px #000',
			"border-bottom-left-radius" : "6px",
			"border-bottom-right-radius" : "6px"
		});
	});
	$('.phone_name .sourcecome ul').delegate(
			'a',
			'click',
			function() {

				$(this).parent().parent().parent().prev('span').children('a')
						.text($(this).text());
				var tar = $(this).parent().parent().parent().parent().find(
						"input[type=hidden]");
				if (tar) {
					tar.val($(this).attr("status"));
					tar.change();
				}
			});
	$(".timerange").on(
			'click',
			function() {
				var tar = $(this).parent().parent().parent().parent().find(
						"input[type=hidden]");
				if (tar) {
					tar.val($(this).attr("status"));
					tar.change();
				}
				var nowtime = new Date();
				var enddate = new Date().Format("yyyy-MM-dd hh:mm:ss");
				var startdate = new Date(nowtime.getTime() - 7 * 24 * 3600
						* 1000).Format("yyyy-MM-dd hh:mm:ss");
				var range = $(this).attr("status");
				if (range == 60)
					startdate = new Date(nowtime.getTime() - 3600 * 1000)
							.Format("yyyy-MM-dd hh:mm:ss");
				if (range == 24)
					startdate = new Date(nowtime.getTime() - 24 * 3600 * 1000)
							.Format("yyyy-MM-dd hh:mm:ss");
				$("#meet_end_time").val(enddate);
				$("#meet_start_time").val(startdate);
			});
	// 格式化日期的函数
	Date.prototype.Format = function(fmt) { // author: meizz
		var o = {
			"M+" : this.getMonth() + 1, // 月份
			"d+" : this.getDate(), // 日
			"h+" : this.getHours(), // 小时
			"m+" : this.getMinutes(), // 分
			"s+" : this.getSeconds(), // 秒
			"q+" : Math.floor((this.getMonth() + 3) / 3), // 季度
			"S" : this.getMilliseconds()
		// 毫秒
		};
		if (/(y+)/.test(fmt))
			fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "")
					.substr(4 - RegExp.$1.length));
		for ( var k in o)
			if (new RegExp("(" + k + ")").test(fmt))
				fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k])
						: (("00" + o[k]).substr(("" + o[k]).length)));
		return fmt;
	}
	// 选定某条日志 主屏幕为不可见 上下文屏幕为可见 按钮可见
	$('#s1 ul').delegate('a', 'click', function() {
		var sourcepath = $("#sourcevalue").val();
		var _id = $(this).attr("id");
		var val = $(this).attr("value");
		var ply = $(this).html();
		upanddown(sourcepath, _id, val,ply);
		$('#s2').css("display", "block");
		$('#s1').css("display", "none");
		$('#rt').css("display", "block");
	});
	// 选定某条日志 主屏幕为可见 上下文屏幕为不可见 按钮不可见
	$("#rt").on('click', function() {
		$('#s1').css("display", "block");
		$('#s2').css("display", "none");
		$('#rt').css("display", "none");
	});
	// 搜索按钮
	$("#seachbutton").on('click', function() {
		var sourcepath = $("#sourcevalue").val();
		var keyname = $("#keyname").val();
		var meet_start_time = $("#meet_start_time").val();
		var meet_end_time = $("#meet_end_time").val();
		lastLogId=null;
		lastLogTime=null;
		var res = validate_time(meet_start_time, meet_end_time);
		if (res != "OK")
			alert(res);
		else {
			getapplog(keyname, meet_start_time, meet_end_time, sourcepath,0);
		}
	});
	// 主屏幕 向下翻动
	$('#always').delegate('#keymoredown', 'click', function() {
		var sourcepath = $("#sourcevalue").val();
		var keyname = $("#keyname").val();
		var meet_start_time = $("#meet_start_time").val();
		var meet_end_time = $("#meet_end_time").val();
	
		getapplog(keyname, meet_start_time, meet_end_time, sourcepath,1);
	
	});

});

function validate_time(meet_start_time, meet_end_time) {
	if (!meet_start_time)
		return "请选择开始时间";
	if (!meet_end_time)
		return "请选择结束时间";
	return "OK";

};
function getapplog(keyname, meet_start_time, meet_end_time, sourcepath,queryType) {
	$
			.ajax({
				cache : true,
				async : false,
				type : "POST",
				dataType : "JSON",
				url : getContextPath() + "/apploggerInfo/getapplogroll",
				data : {
					containerName : dockerName,
					keyword : keyname,
					startTime : meet_start_time,
					endTime : meet_end_time,
					queryType : queryType,
					id : lastLogId,
					logTime : lastLogTime,
					filePaths : sourcepath
				},
				success : function(data) {
					if(queryType==0)
					$("#always").children("li").remove();
					if(queryType==1)
						$("#always").children("li:last").remove();
					var datasize = data.length;
					$(data).each(
							function(i) {
								$("#always").append(
										"<li><a id=" + this.id + " value="
												+ this.timeStamp
												+ "><span style='color:#FFB14C'>"
												+ this.timeStamp + "</span>"
												+ this.payload + "</a></li>");
								if (i == (datasize - 1)) {
									lastLogId = this.id;
									lastLogTime = this.timeStamp;
								}
							});
					$("#always")
					.append(
							"<li style='text-align: center;'><h3>-----------------------------------------------------</h3></li>");
					$("#always")
							.append(
									"<li style='text-align: center;'><h3><span id='keymoredown'>....加载更多啊....</span></h3></li>");

				},
				error : function(data) {
				}
			});

}

function upanddown(sourcepath, _id, val,ply) {
	$
			.ajax({
				cache : true,
				async : false,
				type : "POST",
				dataType : "JSON",
				url : getContextPath() + "/apploggerInfo/getapplogContext",
				data : {
					containerName : dockerName,
					id : _id,
					logTime : val,
					filePath : sourcepath
				},
				success : function(data) {
					$("#sometimes").children("li").remove();
					var backsize = data.backList;
					var frontsize = data.frontList;
					var bl=backsize.length;
					var fl=frontsize.length;
					$(backsize).each(
							function(i) {

								$("#sometimes").append(
										"<li><a id=" + this.id
												+ "><span style='color:#FFB14C'>"
												+ this.timeStamp + "</span>"
												+ this.payload + "</a></li>");

							});
					$("#sometimes").append("<li><a id=" + _id
							+ "><span style='color:red;font-weight:900'>"
							+ ply + "</span></a></li>");
					$(frontsize).each(
							function(i) {

								$("#sometimes").append(
										"<li><a id=" + this.id
												+ "><span style='color:#FFB14C'>"
												+ this.timeStamp + "</span>"
												+ this.payload + "</a></li>");
								if (i == (fl - 1)) {
									lastLogId_ud = this.id;
									lastLogTime_ud = this.timeStamp;
								}
							});

//					$("#sometimes")
//							.append(
//									"<li style='text-align: center;'><h3><a id='moredown'>....加载更多....</a></h3></li>");

				},
				error : function(data) {
				}
			});

}
