<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="UTF-8"%>
<%@page
	import="java.util.*,java.text.DecimalFormat,com.ai.amc.core.vo.HostgroupVo,com.ai.amc.core.vo.HostVo,com.ai.amc.core.vo.EsDockerLogVo"%>
<%
	String baseLocation = request.getContextPath();
	request.setAttribute("_base", baseLocation);
%>
<!DOCTYPE html>
<html lang="zh-cn">
<head>
<meta charset="utf-8">
<meta name="renderer" content="webkit">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<meta id="viewport" name="viewport"
	content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
<title>应用日志</title>
<link rel="stylesheet" href="${_base }/css/apploggerpage.css" />
<!-- 时间插件 -->
<link rel="stylesheet" href="${_base }/css/jquery-ui-1.8.4.custom.css" />
<script type="text/javascript">
var dockerName='<%=request.getAttribute("dockerName").toString()%>';
</script>
</head>
<body>
	<div id="wrap" class="page_monitor_one">
		<!--中心内容区域 -->




		<div class="main_mon_select">

			<div class="phone_name">
				<span> 日志源</span>
				<!--下拉菜单选项效果-->
				<div class="logger_source search_zj">
					<span id="search_box_span" class="age_group_span name_d hoverTab">
						<a id="sourcetarge" href="javascript:void(0);">标准输出</a>
					</span>

					<div class="drop_menu drop_app sourcecome">
						<ul id="sourcepath">
						</ul>
					</div>
					<input type="hidden" id="sourcevalue" value="stdout" />
				</div>
				<!--下拉菜单选项效果-->
			</div>
			<div class="phone_name settle">
				<span> 查询时间范围</span>
				<!--下拉菜单选项效果-->
				<div class="logger_source search_sl">
					<span id="search_time" class="age_group_span name_d hoverTab">
						<a id="searchBy_a" href="javascript:void(0);">自定义时间段</a>
					</span>
					<div class="drop_menu drop_app">
						<ul>
							<li><a class="searchBy_a timerange"
								href="javascript:void(0);" status="60">一小时内</a></li>
							<li><a class="searchBy_a timerange"
								href="javascript:void(0);" status="24">24小时内</a></li>
							<li><a class="searchBy_a timerange"
								href="javascript:void(0);" status="7">一星期内</a></li>
							<li><a class="searchBy_a timerange"
								href="javascript:void(0);" status="1">自定义时间段</a></li>
						</ul>
					</div>
					<input type="hidden" id="productType" value="1" />
				</div>
				<!--下拉菜单选项效果-->
			</div>




		</div>
		<div class="main_mon_select">

			<div class="key_name">
				<span> 关键词</span>
				<!--下拉菜单选项效果-->
				<div class="logger_source search_zj">

					<input class="age_group_span name_d hoverTab" id="keyname" />
				</div>
				<!--下拉菜单选项效果-->
			</div>
			<div class="phone_name settle">
				<div class="mon_kind_tit mon_time_tit">
					<span> 查询时间范围</span>

					<!--时间插件-->
					<div class="warn_main_time">
						<div class="warn_time_left">
							<input id="meet_start_time" maxlength="50" readonly="readonly"
								class="meeting_date_time date_set" placeholder="请选择开始时间"
								value="" />
						</div>
						<span class="between_tit">至</span>
						<div class="warn_time_right">
							<input id="meet_end_time" maxlength="50" readonly="readonly"
								class="meeting_date_time date_set" placeholder="请选择结束时间"
								value="" />
						</div>
					</div>
					<!--时间插件-->
				</div>
			</div>

			<div class="warn_tab">
				<ul>
					<li class="warn_active"><a id="seachbutton" href="javascript:void(0)"
						class="x_btn">搜索</a></li>
				</ul>
			</div>


		</div>
		<!--日志搜索列表 style="display:block"-->
		<div id="s1" class="scrollDiv" style="display: block">
			<ul id="always">
				<li style="text-align: center;"><h3>
						<a id="11111111111121">....请选择....</a>
					</h3></li>

			</ul>
		</div>
		<div class="warn_tab returnclass" id="rt" style="display: none">
			<ul>
				<li class="warn_active"><a href="javascript:void(0)"
					class="x_btn" style="hover:{}">返回</a></li>
			</ul>
		</div>
		<!--日志上下文列表 style="display: none"-->
		<div id="s2" class="scrollDiv" style="display: none">
			<ul id="sometimes">
				<li><a href="javascript:void(0)">哎呀妈呀</a></li>
				<li><a href="javascript:void(0)">上下文出来了</a></li>

			</ul>
		</div>
	</div>





	<script type="text/javascript"
		src="${_base }/js/jquery v1.7.1.2.min.js"></script>
	<script type="text/javascript" src="${_base }/js/common.js"></script>
	<script type="text/javascript" src="${_base }/js/select.js"></script>
	<script type="text/javascript" src="${_base }/js/applogger.js"></script>
	<!-- 时间插件 -->
	<script type="text/javascript"
		src="${_base }/js/jquery-ui-1.8.4.custom.min.js"></script>
	<script type="text/javascript"
		src="${_base }/js/jquery.ui.timepicker.js"></script>
</body>
</html>
