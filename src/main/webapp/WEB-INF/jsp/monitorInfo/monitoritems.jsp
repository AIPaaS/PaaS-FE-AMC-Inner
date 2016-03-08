<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="UTF-8"%>
<%@page
	import="java.util.*,java.text.DecimalFormat,com.ai.amc.core.vo.HostgroupVo,com.ai.amc.core.vo.HostVo,com.ai.amc.core.vo.ItemVo"%>
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
<meta name="apple-mobile-web-app-status-bar-style" content="black"/>
<meta id="viewport" name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
<title>监控项配置</title>
<link rel="stylesheet" href="${_base }/css/common.css" />
<link rel="stylesheet" href="${_base }/css/page.css"/>
</head>
<body>
<div id="wrap" class="page_monitor_iframe"> 
  <!--中心内容区域 -->
  <div class="main">
    <div class="main_mon_right">
      <div class="main_mon_list main_mon_tablist trans-box-shadow"> 
        <!--tab选项卡-->
        <div class="main_tab">
          <div class="list_tab_detail"> 
            <!--tab模块1-->
            <div class="list_block_one">
            <% String dockernames = request.getAttribute("dockername").toString(); %>
              <div class="main_mon_detail main_one_detail"> <img src="${_base }/img/loading.png" name ="<%=dockernames%>" class="loading_one"> </div>
              
              <!--数据列表-->
              <div class="data_list">
                  <%String isok = request.getAttribute("result").toString();
                   if(isok =="NO"){
                	   String dockername = request.getAttribute("dockername").toString();
                   %>
                  <ul class="data_tp">
                  <li class="active">
                    <h3>CPU</h3>
                    <span>请稍后</span> </li>
                   <li>
                    <h3>内存</h3>
                    <span>请稍后</span> </li>
                  <li>
                    <h3>流量(I)</h3>
                    <span>请稍后</span> </li>
                  <li>
                    <h3>流量(O)</h3>
                    <span>请稍后</span> </li>
                </ul>
                  <%
                        }else{
                	   String dockername = request.getAttribute("dockername").toString();
                	   List<ItemVo> items = (List) request.getAttribute("itemList");
                   %>
                <ul class="data_tp">
                  <li class="active">
                    <h3>CPU</h3>
                    <span class="getItemid" style="display:none;"><%=items.get(0).getItemid()%></span><%=items.get(0).getLastvalue()%><%=items.get(0).getUnits()%> <span class="getItemtype" style="display:none;"><%=items.get(0).getValue_type()%></span><span class="getunit"style="display:none;"><%=items.get(0).getUnits()%></span><span class="getname"style="display:none;"><%=items.get(0).getName()%></span> </li>
                  <li>
                    <h3>内存</h3>
                    <span class="getItemid" style="display:none;"><%=items.get(1).getItemid()%></span><%=items.get(1).getLastvalue()%><%=items.get(1).getUnits()%> <span class="getItemtype"style="display:none;"><%=items.get(1).getValue_type()%></span><span class="getunit"style="display:none;"><%=items.get(1).getUnits()%></span><span class="getname"style="display:none;"><%=items.get(1).getName()%></span></li>
                  <li>
                    <h3>流量(I)</h3>
                    <span class="getItemid" style="display:none;"><%=items.get(2).getItemid()%></span><%=items.get(2).getLastvalue()%><%=items.get(2).getUnits()%><span class="getItemtype" style="display:none;"><%=items.get(2).getValue_type()%></span><span class="getunit"style="display:none;"><%=items.get(2).getUnits()%></span><span class="getname"style="display:none;"><%=items.get(2).getName()%></span></li>
                  <li>
                    <h3>流量(O)</h3>
                    <span class="getItemid" style=" display:none;"><%=items.get(3).getItemid()%></span><%=items.get(3).getLastvalue()%><%=items.get(3).getUnits()%><span class="getItemtype" style="display:none;"><%=items.get(3).getValue_type()%></span><span class="getunit"style="display:none;"><%=items.get(3).getUnits()%></span><span class="getname"style="display:none;"><%=items.get(3).getName()%></span></li>
                </ul>
                <%} %>
                <div class="diag_main">
                <!--cpu 选项卡-->
                  <div class="diag_block">
                    <div class="diag_tab_tp">
                      <ul>
                        <li class="active" id="hour_tap"><span class="diag_cion"></span><a href="javascript:void(0)">1小时</a></li>
                        <li id="day_tap"><span class="diag_cion"></span><a href="javascript:void(0)">24小时</a></li>
                        <li id="week_tap"><span class="diag_cion"></span><a href="javascript:void(0)">一星期</a></li>
                        <li id="month_tap"><span class="diag_cion"></span><a href="javascript:void(0)">一个月</a></li>
                      </ul>
                    </div>
                    <div class="diag_tab_bt">
                      <div class="diag_tab_block">
                        <div id="hour_main" style="margin: 0 auto;width:1000px;height:300px;"> </div>
                      </div>
                      <div class="diag_tab_block" style="display:none">
                        <div id="minute" style="margin: 0 auto;width:1000px;height:300px;"> </div>
                      </div>
                      <div class="diag_tab_block" style="display:none">
                        <div id="week" style="margin: 0 auto;width:1000px;height:300px;"> </div>
                      </div>
                      <div class="diag_tab_block" style="display:none">
                        <div id="month" style="margin: 0 auto;width:1000px;height:300px;"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--tab模块1--> 
            
          </div>
        </div>
        <!--tab选项卡--> 
      </div>
    </div>
  </div>
</div>
<script type="text/javascript" src="${_base }/js/jquery-1.9.1.js"></script> 
<script type="text/javascript" src="${_base }/js/page.js"></script> 
<script type="text/javascript" src="${_base }/js/highcharts.js"></script> 
<script type="text/javascript" src="${_base }/js/exporting.js"></script> 
<script type="text/javascript" src="${_base }/js/page_chart.js"></script>
</body>
</html>