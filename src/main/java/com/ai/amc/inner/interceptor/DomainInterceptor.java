package com.ai.amc.inner.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

/**
 * 获取数据库中配置的手机报销平台地址
 * @author archer
 *
 */
public class DomainInterceptor implements HandlerInterceptor {
	private static final Log log = LogFactory.getLog(DomainInterceptor.class);	

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {		
		try {			
			System.out.println("拦截器要做的逻辑--所有都拦截");	    
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
		}
		return true;
	}

	@Override
	public void postHandle(HttpServletRequest arg0, HttpServletResponse arg1, Object arg2, ModelAndView arg3) throws Exception {
		log.debug("interceptor...postHandle");
	}

	@Override
	public void afterCompletion(HttpServletRequest arg0, HttpServletResponse arg1, Object arg2, Exception arg3) throws Exception {
		log.debug("interceptor...afterCompletion");
	}

}
