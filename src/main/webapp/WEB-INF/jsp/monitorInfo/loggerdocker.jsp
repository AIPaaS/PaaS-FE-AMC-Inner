<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="UTF-8"%>
    <%@page
    import="java.util.*,java.text.DecimalFormat,com.ai.amc.core.vo.HostgroupVo,com.ai.amc.core.vo.HostVo,com.ai.amc.core.vo.EsDockerLogVo"%>
<%
    String baseLocation = request.getContextPath();
    request.setAttribute("_base", baseLocation);
%>
<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>监控项配置dos</title>
<link rel="stylesheet" href="${_base }/css/common.css" />
<link rel="stylesheet" href="${_base }/css/page.css"/>
<script type="text/javascript" src="${_base }/js/jquery-1.9.1.js"></script> 
<script type="text/javascript" src="${_base }/js/loggerpage.js"></script>
<script type="text/javascript">
var dockerName='<%=request.getAttribute("dockerName").toString()%>';
</script>
</head>

<body>

<div id="s1" class="scrollDiv">
<ul class="scrul">
             
  
</ul>
</div>





</body>
</html>
