$(function() {
	getdockerpath();

	// *日期选择器插件*/
	$(".meeting_date_time").datetimepicker({
		changeMonth : true,
		changeYear : true,
		// yearRange:"2015:2024",
		// numberOfMonths: 2,//最多显示两个月
		dateFormat : 'yy-mm-dd',
		timeFormat : "hh:mm:ss", // 格式化时间
		stepHour : 1, // 设置步长
		stepMinute : 5,
		timeText : '时间',
		hourText : '小时',
		minuteText : '分钟',
		secondText : '秒数',
		currentText : '现在',
		closeText : "确定",
		maxDate : 0, // 设置它的最大时间
		minDate : -7,// 设置它的最小时间
	// onSelect: function(dateText, inst) {
	// var s_time = $("#meet_start_time").val();
	// var e_time = $("#meet_end_time").val();
	// if (e_time) {
	// meetingDateTime(s_time, e_time);
	// }
	// }
	// });
	//	    
	// var meetingDateTime = function(s_time, e_time) {
	// // $.ajax({
	// // type: 'post',
	// // url: '/create/ajaxvalidatetime',
	// // dataType: 'html',
	// // data: ({s_time: s_time, e_time: e_time}),
	// // success: function(res) {
	// // return false;
	// // }
	// // });
	});
});

function getdockerpath() {
	$.ajax({
				cache : true,
				async : false,
				type : "POST",
				dataType : "JSON",
				url : getContextPath() + "/apploggerInfo/getapplogfile",
				data : {
					containerName : dockerName
				},
				success : function(data) {
					$("#sourcepath").children("li").remove();
					$("#sourcepath")
							.append(
									"<li><a class='searchBy_a' href='javascript:void(0);' status='stdout'>标准输出</a></li>");

					$("#sourcepath")
							.append(
									"<li><a class='searchBy_a' href='javascript:void(0);' status='stderr'>标准错误</a></li>");
					$("#sourcepath")
							.append(
									"<li><a class='searchBy_a' href='javascript:void(0);' status='dockerlogstreamer'>应用日志</a></li>");

					$("#sourcetarge").text("标准输出");
				},
				error : function(data) {
					//alert("NONO");
				}
			});
}

function getContextPath() {
	// 获取当前网址，如： http://localhost:8080/payweb/inedx.jsp
	var curWwwPath = window.document.location.href;
	// 获取主机地址之后的目录，如： payweb/inedx.jsp
	var pathName = window.document.location.pathname;
	var pos2 = curWwwPath.lastIndexOf(pathName);
	// 获取主机地址，如： http://localhost:8080
	var localhostPaht = curWwwPath.substring(0, pos2);
	// 获取带"/"的项目名，如：/payweb
	var projectName = pathName
			.substring(0, pathName.substr(1).indexOf('/') + 1);
	if (projectName == '/paas-fe-amc-inner'
			|| projectName == '/paas-fe-amc-inner') {
		return localhostPaht + projectName;
	}
	return localhostPath;
}
