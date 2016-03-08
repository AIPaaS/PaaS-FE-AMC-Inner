package com.ai.amc.inner.system.base;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.servlet.view.freemarker.FreeMarkerView;

/**
 * 自定义视图处理类
 * @Desc: 添加base属性，方便freemarker页面中引用
 * @Title: BaseFreeMarkerView.java 
 * @author mapl
 *
 */

public class BaseFreeMarkerView extends FreeMarkerView {
	
    private static final String CONTEXT_PATH = "base"; 
    
    @Override
    protected void exposeHelpers(Map<String, Object> model,
            HttpServletRequest request) throws Exception {
        model.put(CONTEXT_PATH, request.getContextPath());
        super.exposeHelpers(model, request);
    }
    
}
