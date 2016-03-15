package com.ai.amc.inner.controller.monitorInfo;

import java.util.List;

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
@RequestMapping(value = "/loggerInfo")
public class LoggerDockerController {
	private static final Logger logger = LogManager.getLogger(LoggerDockerController.class.getName());
	@Reference
	private IEsLogApi esLogApi;
	
	@RequestMapping("/getlog")
	public String getLog(HttpServletRequest request, HttpServletResponse resp){
		String dockerName = request.getParameter("dockerName");
		request.setAttribute("dockerName", dockerName);
		System.out.println("dockerName:"+ dockerName);
		return "/monitorInfo/loggerdocker";
	}
	@RequestMapping("/regetlog")
	@ResponseBody
	public List<EsDockerLogVo> regetLog(HttpServletRequest request, HttpServletResponse resp){
		String dockerName = request.getParameter("dockerName");
		String lastId = request.getParameter("lastLogId");
		String lastTime = request.getParameter("lastLogTime");
		List<EsDockerLogVo> list = esLogApi.getDockerLogRoll(dockerName, lastId, lastTime);
		return list;
	}
}
