
//小时 曲线图
function hour_main(hourtime,hourvalue,unittype,itemname){
	var a = hourtime[0];
	var b=a.substring(0,a.indexOf("/"));
	var c=a.substring(a.indexOf("/")+1,a.lastIndexOf("/"));
	var d=a.substring(a.lastIndexOf("/")+1,a.indexOf(" "));
	var e=a.substring(a.lastIndexOf(" "),a.lastIndexOf(":"));
	var f=a.substring(a.lastIndexOf(":")+1);
	 $('#hour_main').highcharts({
	        chart: {
	        	type: 'area'
	        },
	        title: {
	            text: itemname
	        },
	        subtitle: {
	            text: ''
	        },
	        xAxis: {
	            type: 'datetime',
	            tickmarkPlacement: 'on',
	            maxZoom: 5*60*1000,
	            labels : {
	                rotation: 0, 
	                  style : {
	                  fontSize:'5px',
	                  fontWeight:'normal',
	                  // writingMode:'tb-rl'
	                  }
	              },
	            title: {
	                enabled: false
	            }
	        },
	        yAxis: {
	            title: {
	                text: ''
	            },
		        labels: {
	                formatter: function() {
	                    return this.value;
	                }
	            }
	        },
	        tooltip: {
	            shared: true,
	            valueSuffix: unittype
	        },
	        legend: {
	            enabled: false
	        },
	        plotOptions: {
	            area: {
	                stacking: 'normal',
	                lineColor: '#666666',
	                lineWidth: 1,
	                marker: {
	                    lineWidth: 1,
	                    lineColor: '#666666'
	                }
	            }
	        },
	        series: [{
	           // type: 'area',
	            name: itemname,
	            pointInterval: 60 * 1000,
	            pointStart: Date.UTC(b,c-1,d,e,f),
	            data: hourvalue
	        }]
	    });
}

//分钟 曲线图
function minute(ccc,ddd,lu,itemname){
	var a = ccc[0];
	var b=a.substring(0,a.indexOf("/"));
	var c=a.substring(a.indexOf("/")+1,a.lastIndexOf("/"));
	var d=a.substring(a.lastIndexOf("/")+1,a.indexOf(" "));
	var e=a.substring(a.lastIndexOf(" "),a.lastIndexOf(":"));
	var f=a.substring(a.lastIndexOf(":")+1);
    $('#minute').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: itemname
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            type: 'datetime',
            tickmarkPlacement: 'on',
            maxZoom: 3600*1000,
            labels : {
                rotation: 0, 
                  style : {
                  fontSize:'5px',
                  fontWeight:'normal',
                  // writingMode:'tb-rl'
                  }
              },
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: ''
            },
	        labels: {
                formatter: function() {
                    return this.value;
                }
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: lu
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
           // type: 'area',
            name: itemname,
            pointInterval: 60 * 60 * 1000,
            pointStart: Date.UTC(b,c-1,d,e,f),
            data: ddd
        }]
    });
    }


//星期 曲线图
function week(weektime,weekvalue,lu,itemname){
	var a = weektime[0];
	var b=a.substring(0,a.indexOf("/"));
	var c=a.substring(a.indexOf("/")+1,a.lastIndexOf("/"));
	var d=a.substring(a.lastIndexOf("/")+1,a.indexOf(" "));
	var e=a.substring(a.lastIndexOf(" "),a.lastIndexOf(":"));
	var f=a.substring(a.lastIndexOf(":")+1);
    $('#week').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: itemname
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            type: 'datetime',
            tickmarkPlacement: 'on',
            maxZoom: 9 * 3600 * 1000,
            labels : {
                rotation: 0, 
                  style : {
                  fontSize:'5px',
                  fontWeight:'normal',
                  // writingMode:'tb-rl'
                  }
              },
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: ''
            },
	        labels: {
                formatter: function() {
                    return this.value;
                }
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: lu
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
           // type: 'area',
            name: itemname,
            pointInterval: 3*60 * 60 * 1000,
            pointStart: Date.UTC(b,c-1,d,e,f),
            data: weekvalue
        }]
    });
    }

//月份 曲线图
function month(montime,monvalue,lu,itemname){
	var a = montime[0];
	var b=a.substring(0,a.indexOf("/"));
	var c=a.substring(a.indexOf("/")+1,a.lastIndexOf("/"));
	var d=a.substring(a.lastIndexOf("/")+1,a.indexOf(" "));
	var e=a.substring(a.lastIndexOf(" "),a.lastIndexOf(":"));
	var f=a.substring(a.lastIndexOf(":")+1);
    $('#month').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: itemname
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            type: 'datetime',
            tickmarkPlacement: 'on',
            maxZoom: 24*3600*1000,
            labels : {
                rotation: 0, 
                  style : {
                  fontSize:'5px',
                  fontWeight:'normal',
                  // writingMode:'tb-rl'
                  }
              },
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: ''
            },
	        labels: {
                formatter: function() {
                    return this.value;
                }
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: lu
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
           // type: 'area',
            name: itemname,
            pointInterval: 12 * 60 * 60 * 1000,
            pointStart: Date.UTC(b,c-1,d,e,f),
            data: monvalue
        }]
    });
    }
   
//初始化  默认获取第一个itemid
$(function(){
	   var itemid =   $('.getItemid:first').text();
	   var itemtype = $('.getItemtype:first').text();
	   var unittype = $('.getunit:first').text();
	   var itemname = $('.getname:first').text();
	   post_func(itemid,itemtype,unittype,itemname);
});