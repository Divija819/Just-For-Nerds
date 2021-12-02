package com.rest.dto;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="User")
public class User{

	@Id@GeneratedValue
	int loginId;

	@Column
	String userName;

	@Column
	String password;

	@Column
	String mobileNo;

	@Column
	String address;

	@OneToMany(mappedBy = "books")
	private List<BuySell> buysell=new ArrayList<BuySell>();

	public User(int loginId, String userName, String password, String mobileNo, String address, List<BuySell> buysell) {
		super();
		this.loginId = loginId;
		this.userName = userName;
		this.password = password;
		this.mobileNo = mobileNo;
		this.address = address;
		this.buysell = buysell;
	}

	public User() {
		super();
	}

	public int getLoginId() {
		return loginId;
	}

	public void setLoginId(int loginId) {
		this.loginId = loginId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public List<BuySell> getBuysell() {
		return buysell;
	}

	public void setBuysell(List<BuySell> buysell) {
		this.buysell = buysell;
	}
	
}

	