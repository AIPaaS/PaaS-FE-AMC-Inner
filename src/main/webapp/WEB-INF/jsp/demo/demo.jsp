<%@ page language="java" pageEncoding="UTF-8"%>
<%
    String baseLocation = request.getContextPath();
    request.setAttribute("_base", baseLocation);
%>
<html>
<head>
<script src="${_base }/js/Jquery/jquery-1.10.2.min.js"></script>
<title>Insert title here</title>
<script type="text/javascript">

function demo(){
     $.ajax({
        type : "POST",
        url : "${_base}/sysuser/sysuserAjax",
        dataType : "json",
        data : {
            page : "1"
        },        
        success : function(msg) {
            if (msg.resultCode == '000000') {
                alert(msg.resultMessage);
            } else {
                alert(msg.resultMessage);
            }
        },    
        error : function() {
            alert("ERROR");
        }
    }); 
}


</script>
</head>
<body>
aaaaaaaaaaaaaaaaaaaaaaaa
<input type="button" value="点击查看ajax" onclick="demo()" >
</body>
</html>