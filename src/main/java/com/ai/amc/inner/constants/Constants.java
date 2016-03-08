package com.ai.amc.inner.constants;

public class Constants {
	/**
	 * 通用静态参数
	 * 
	 * @author mapl
	 * 
	 */
	public static class Common {
		
		public static final String SECURITY_KEY = "7331c9b6b1a1d521363f7bca8acb095f";// md5

		public static final String OPERATE_CODE_SUCCESS = "000000";// 操作成功

		public static final String OPERATE_CODE_FAIL = "999999";// 操作失败
		
		//hyh  以下要配到库里   后场 的Constants.class
		public static final int BEFOR_MAX_MONTHNUM = 12;// 最多能报销包含当前月的前几个月,(默认是12)
		
	}
	public static class Traffic{
		public static final float mileagePrice=(float) 2.3;
		public static final String purpose="工作";
	}
	
	/**
	 * 明细表的公共参数
	 * @author archer
	 *
	 */
	public static class CommonItemList{
		//是否已提交
		public static class IsCommit{
			//已提交
			public static final String YES= "1"; 
			//未提交
			public static final String NO= "0";
			 
		}
	}
	
	/**
	 * 交通起始地点维护表
	 * @author archer
	 *
	 */
	public static class AisseAppTrafficAddressList{
		//地址类型
		public static class AddressType{
			//出发地
			public static final String FROM_ADDRESS= "0"; 
			//目的地
			public static final String TO_ADDRESS= "1";
			 
		}
	}
	
}
