var lastLogId;
var lastLogTime;

$(function(){
	 reload();
	 setval();	
	setInterval("reload()",10000);
});

function reload(){
	
	$.ajax({
		cache : true,
		async : false,
		type : "POST",
		dataType :"JSON",
		url : getContextPath()  +"/loggerInfo/regetlog",
		data : {
			dockerName:dockerName,
			lastLogId:lastLogId,
			lastLogTime:lastLogTime
		},
		success: function(data){
			 var datasize = data.length;
			 $(data).each(function (i) {
				 $(".scrul").append("<li><span style='color:red'>"+this.timeStamp+"</span>"+this.payload+"</li>");
				 if(i==(datasize-1)){
					 lastLogId=this.id;
					 lastLogTime=this.timeStamp;
					 }
			   });
			
		},
		error : function(data) {
			//alert("NONO");
		}
	});
}
function setval(){
	  setInterval(function(){
          var div_h=$(".scrollDiv").height();
          var div_ul=$(".scrollDiv ul").height();
          if(div_ul>=div_h){
//        	  alert("div_ul"+div_ul);
//        	  alert("div_h"+div_h);
//        	  alert("tops"+tops);
              if((parseInt(div_ul)-parseInt(div_h)) > parseInt(tops)*25){

                  AutoScroll("#s1");
              }
          }
          },100);
}
var tops = 0;
function AutoScroll(obj){
    tops = parseInt(tops) + 1;
    $(obj).find("ul:first").animate({
        marginTop:"0px"
    },100,function(){
        $(".scrollDiv").scrollTop(tops*25);
    });
}
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


//
