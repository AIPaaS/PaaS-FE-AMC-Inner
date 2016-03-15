package com.ai.amc.inner.controller.monitorInfo;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ai.amc.core.po.Trends;
import com.ai.amc.core.po.TrendsKey;
import com.ai.amc.core.po.Trends_uint;
import com.ai.amc.core.po.Trends_uintKey;
import com.ai.amc.core.rest.IHistoryApi;
import com.ai.amc.core.rest.IHostApi;
import com.ai.amc.core.rest.IHostgroupApi;
import com.ai.amc.core.rest.IItemApi;
import com.ai.amc.core.rest.ITrendsApi;
import com.ai.amc.core.rest.ITrends_uintApi;
import com.ai.amc.core.vo.HistoryVo;
import com.ai.amc.core.vo.HostVo;
import com.ai.amc.core.vo.HostgroupVo;
import com.ai.amc.core.vo.ItemVo;
import com.alibaba.dubbo.config.annotation.Reference;
import com.alibaba.fastjson.JSON;

/**
 * 获取用户的所有主机
 * 
 * 
 * @author monica
 *
 */
@Controller
@RequestMapping(value = "/monitorInfo")
public class MonitorItemController {
	private static final Logger logger = LogManager.getLogger(MonitorItemController.class.getName());
	@Reference
	private IItemApi iItemApi;
	@Reference
	private IHistoryApi iHistoryApi;
	@Reference
	private ITrendsApi iTrendsApi;
	@Reference
	private ITrends_uintApi iTrends_uintApi;
	
	@RequestMapping(value = "/index")
	public String jumpto(HttpServletRequest request, HttpServletResponse resp){
		String dockername = request.getParameter("dockername"); 
		List<ItemVo> itemVos =iItemApi.getItemsByName(dockername);
		if (itemVos.size()!=0) {
			request.setAttribute("result", "OK");
			request.setAttribute("dockername", dockername);
			List<ItemVo> itemList = new ArrayList<ItemVo>();
			itemList =this.getInfobyname(dockername);
			request.setAttribute("itemList", itemList);
		}else{
			request.setAttribute("result", "NO");
			request.setAttribute("dockername", dockername);
		} 
		
		return "/monitorInfo/monitoritems";

	}
	@RequestMapping("/update")
	@ResponseBody
	public List<ItemVo> getInfobyname(String dockername){
		String[] names =new String[]{dockername+":CPU used time",dockername+":Used memory",dockername+":Incomming network",dockername+":Outgoing network"};
		List<ItemVo> itemList = new ArrayList<ItemVo>();
		
		ItemVo itemVo = null;
		
		for (int i = 0; i < names.length; i++) {
			try {
				itemVo = iItemApi.getItemsByName(names[i]).get(0);
				if(itemVo.equals(null)){
					ItemVo itemnew = new ItemVo();
					itemnew.setLastvalue("暂不支持");
					itemnew.setUnits("");
					itemList.add(itemnew);
				}else{
					System.out.println("itemVo.getLastvalue()"+itemVo.getLastvalue());
					itemVo = getItemUnit(itemVo);
					System.out.println("itemVo.getLastvalue()"+itemVo.getLastvalue());
					itemList.add(itemVo);
				}
			} catch (Exception e) {
				ItemVo itemnew = new ItemVo();
				itemnew.setLastvalue("暂不支持");
				itemnew.setUnits("");
				itemnew.setName("");
				itemList.add(itemnew);
			}
		}
		return itemList;

	}
	
	@ResponseBody
	public  ItemVo getItemUnit(ItemVo itemold){
		 ItemVo itemnew = itemold;
			try {
				 if(itemnew.getUnits().equals("%")){
					 itemnew.setLastvalue(String.format("%.2f", Double.valueOf(itemold.getLastvalue())));
				 }
                 if(itemnew.getUnits().equals("B")){
                	 System.out.println("Double.getInteger(itemlistnew.get(i).getLastvalue())"+Double.valueOf(itemnew.getLastvalue()));
                	 Double itemvalue = Double.valueOf(itemnew.getLastvalue());
                	 if (itemvalue/1024<1) {
					
					 }
                	 else{
	                	 if (itemvalue/1024<1024) {
	                		 itemnew.setUnits("KB");
	                		 itemnew.setLastvalue(String.format("%.2f", (itemvalue/1024)));
	    					 }else{
	    						 if (itemvalue/(1024*1024)<1024){
	    							 itemnew.setUnits("MB");
	    							 itemnew.setLastvalue(String.format("%.2f", (itemvalue/(1024*1024))));	 
	    						 }else{
	    							 itemnew.setUnits("GB");
	    							 itemnew.setLastvalue(String.format("%.2f",(itemvalue/(1024*1024*1024))));	 
	    						 }
						     }
                	    }
                 }
                 if(itemnew.getUnits().equals("bps")){
                	 System.out.println("Integer.getInteger(itemlistnew.get(i).getLastvalue())"+Double.valueOf(itemnew.getLastvalue()));
                	 Double itemvalue = Double.valueOf(itemnew.getLastvalue());
	            	 if (itemvalue/1024<1) {
					
					 }
	            	 else{
	                	 if (itemvalue/1024<1024) {
	                		 itemnew.setUnits("Kbps");
	                		 itemnew.setLastvalue(String.format("%.2f",(itemvalue/1024)));
	    					 }else{
	    						 if (itemvalue/(1024*1024)<1024){
	    							 itemnew.setUnits("Mbps");
	    							 itemnew.setLastvalue(String.format("%.2f",(itemvalue/(1024*1024))));	 
	    						 }else{
	    							 itemnew.setUnits("Gbps");
	    							 itemnew.setLastvalue(String.format("%.2f",(itemvalue/(1024*1024*1024))));	 
	    						 }
						     }
	            	    }
                 }
			} catch (Exception e) {
			    itemnew = itemold;
			}
		return itemnew;
	}
	
	
	@RequestMapping("/getgraph")
	@ResponseBody
	public List getgraph(HttpServletRequest request, HttpServletResponse resp){
		System.out.println(" -------------/hostgroup//test---------------------------");
		String itemid = request.getParameter("itemid"); 
		String value_type = request.getParameter("value_type"); 
		System.out.println("value_type="+value_type);
		List resultList = new ArrayList();
	        //1小时的 post 请求 history 接口
			List<HistoryVo> historyVos = new ArrayList<HistoryVo>();
			try {
				historyVos = iHistoryApi.getItemsByItemID(itemid,value_type,3600);
				System.out.println("historyVos.size()"+historyVos.size());
			} catch (Exception e) {
				e.printStackTrace();
				System.out.println("ssssssssssssssss");
			}
			resultList.add(historyVos) ;
			//24小时的  数据库 请求 trends  value_type=0在trends表   value_type=3在trends_uint表  
			if (value_type.equals("0")) {
				List<Trends> trendsbyday = new ArrayList<Trends>();
				List<Trends> trendsbyweek = new ArrayList<Trends>();
				List<Trends> trendsbymonth = new ArrayList<Trends>();
				try {
					TrendsKey key = new TrendsKey();
					key.setItemid(Long.valueOf(itemid));
					key.setClock_begin(Math.round(System.currentTimeMillis()/1000)-60*60*24);
					key.setClock_end(Math.round(System.currentTimeMillis()/1000));
                    key.setInterval(1);//24小时的 间隔为1
                    trendsbyday = iTrendsApi.getTrendsbykey(key);
                    
                    key.setClock_begin(Math.round(System.currentTimeMillis()/1000)-60*60*24*7);
                    key.setInterval(3);//一周的 间隔为3
                    trendsbyweek= iTrendsApi.getTrendsbykey(key);
                    
                    key.setClock_begin(Math.round(System.currentTimeMillis()/1000)-60*60*24*7*30);
                    key.setInterval(12);//一月的 间隔为12
                    trendsbymonth= iTrendsApi.getTrendsbykey(key);
                    
				} catch (Exception e) {
					e.printStackTrace();
				}
				resultList.add(trendsbyday);
				resultList.add(trendsbyweek);
				resultList.add(trendsbymonth);
			}
			if (value_type.equals("3")) {
				List<Trends_uint> trends_uintbyday = new ArrayList<Trends_uint>();
				List<Trends_uint> trends_uintbyweek = new ArrayList<Trends_uint>();
				List<Trends_uint> trends_uintbymonth = new ArrayList<Trends_uint>();
				try {
					Trends_uintKey key = new Trends_uintKey();
					key.setItemid(Long.valueOf(itemid));
					key.setClock_begin(Math.round(System.currentTimeMillis()/1000)-60*60*24);
					key.setClock_end(Math.round(System.currentTimeMillis()/1000));
					key.setInterval(1);
					trends_uintbyday = iTrends_uintApi.getTrendsbykey(key);
					
					key.setClock_begin(Math.round(System.currentTimeMillis()/1000)-60*60*24*7);
					key.setInterval(3);
					trends_uintbyweek = iTrends_uintApi.getTrendsbykey(key);
					
					key.setClock_begin(Math.round(System.currentTimeMillis()/1000)-60*60*24*30);
					key.setInterval(12);
					trends_uintbymonth = iTrends_uintApi.getTrendsbykey(key);
				} catch (Exception e) {
					e.printStackTrace();
				}
				resultList.add(trends_uintbyday);
				resultList.add(trends_uintbyweek);
				resultList.add(trends_uintbymonth);
			}
			System.out.println(resultList.get(0)+"resultList.get(0)");
		return resultList;
	}
	
	
}
