package com.ai.amc.inner.controller.monitorInfo;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ai.amc.core.rest.IEsLogApi;
import com.ai.amc.core.vo.EsDockerLogVo;
import com.alibaba.dubbo.config.annotation.Reference;
@Controller
@RequestMapping(value = "/apploggerInfo")
public class AppLoggerDockerController {
	private static final Logger logger = LogManager.getLogger(AppLoggerDockerController.class.getName());
	@Reference
	private IEsLogApi esLogApi;
	
	@RequestMapping("/appgetlog")
	public String getLog(HttpServletRequest request, HttpServletResponse resp){
		String dockerName = request.getParameter("dockerName");
		request.setAttribute("dockerName", dockerName);
		System.out.println("dockerName-------------"+dockerName);
		return "/monitorInfo/apploggerdocker";
	}
	@RequestMapping("/getapplogfile")
	@ResponseBody
	public List<String> getAppLogFile(HttpServletRequest request, HttpServletResponse resp){
		String containerName = request.getParameter("containerName");
		List<String> list = esLogApi.getFilePathListByContainer(containerName);
		return list;
	}
	
	@RequestMapping("/getapplogroll")
	@ResponseBody
	public List<EsDockerLogVo> getAppLogRoll(HttpServletRequest request, HttpServletResponse resp){
		String containerName = request.getParameter("containerName");
		String keyword = request.getParameter("keyword");
		String startTime = request.getParameter("startTime").replace(" ", "T");
		String endTime = request.getParameter("endTime").replace(" ", "T");
		int queryType = Integer.valueOf(request.getParameter("queryType"));
		String id = request.getParameter("id");
		String logTime = request.getParameter("logTime");
		String filePaths = request.getParameter("filePaths");
		String[] paths = new String[]{};
		if(filePaths != null && filePaths.length() > 0) {
			paths = filePaths.split(",",-1);
		}
		List<EsDockerLogVo> list = esLogApi.getAppLogRoll(containerName, keyword,  Arrays.asList(paths),
				startTime, endTime, queryType, id, logTime);
		return list;
	}
	
	@RequestMapping("/getapplogContext")
	@ResponseBody
	public Map<String,List<EsDockerLogVo>> getAppLogContext(HttpServletRequest request, HttpServletResponse resp){
		String containerName = request.getParameter("containerName");
		String id = request.getParameter("id");
		String logTime = request.getParameter("logTime");
		String filePath = request.getParameter("filePath");
		System.out.println(logTime);
		System.out.println(filePath);
		Map<String,List<EsDockerLogVo>> map = esLogApi.getAppLogContext(containerName, filePath, id, logTime);
		return map;
	}
}