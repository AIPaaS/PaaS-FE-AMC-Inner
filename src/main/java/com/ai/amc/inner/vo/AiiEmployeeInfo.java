package com.ai.amc.inner.vo;
/**
 * 用户信息入session
 * @author renfeng
 *
 */
public class AiiEmployeeInfo {
	
	private Integer person_id; 
	private String nt_account;
	private String last_name;			//员工名称
	private String employee_number;		//员工号
	private String office;				//分机号
	private String company_id;			//部门ID
	private String sbu_id;				//利润中心
	private String costcenter_id;		//成本中心
	private String region_id;			//Region
	private String carrier_id;			//Carrier
	
	private String region_name;			//地区
	private String company_name; 		//公司名称
	private String email_address;		//申请人邮箱
	
	private String is_flag; 			//是否存在未提交的以保存申请单
	
	
	public String getRegion_name() {
		return region_name;
	}
	public void setRegion_name(String region_name) {
		this.region_name = region_name;
	}
	public String getCompany_name() {
		return company_name;
	}
	public void setCompany_name(String company_name) {
		this.company_name = company_name;
	}
	public String getEmail_address() {
		return email_address;
	}
	public void setEmail_address(String email_address) {
		this.email_address = email_address;
	}
	public String getIs_flag() {
		return is_flag;
	}
	public void setIs_flag(String is_flag) {
		this.is_flag = is_flag;
	}
	public Integer getPerson_id() {
		return person_id;
	}
	public void setPerson_id(Integer person_id) {
		this.person_id = person_id;
	}
	public String getNt_account() {
		return nt_account;
	}
	public void setNt_account(String nt_account) {
		this.nt_account = nt_account;
	}
	public String getLast_name() {
		return last_name;
	}
	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}
	public String getEmployee_number() {
		return employee_number;
	}
	public void setEmployee_number(String employee_number) {
		this.employee_number = employee_number;
	}
	public String getOffice() {
		return office;
	}
	public void setOffice(String office) {
		this.office = office;
	}
	public String getCompany_id() {
		return company_id;
	}
	public void setCompany_id(String company_id) {
		this.company_id = company_id;
	}
	public String getSbu_id() {
		return sbu_id;
	}
	public void setSbu_id(String sbu_id) {
		this.sbu_id = sbu_id;
	}
	public String getCostcenter_id() {
		return costcenter_id;
	}
	public void setCostcenter_id(String costcenter_id) {
		this.costcenter_id = costcenter_id;
	}
	public String getRegion_id() {
		return region_id;
	}
	public void setRegion_id(String region_id) {
		this.region_id = region_id;
	}
	public String getCarrier_id() {
		return carrier_id;
	}
	public void setCarrier_id(String carrier_id) {
		this.carrier_id = carrier_id;
	}
	
	
}
