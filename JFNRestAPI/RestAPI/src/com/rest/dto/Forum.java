package com.rest.dto;

import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
//import javax.xml.bind.annotation.XmlRootElement;

//@XmlRootElement

@Entity

public class Forum {
@Id@GeneratedValue
private int id;
@Column
private String userId;
@Column
private String userName;
@Column
private String msg;

public Forum() {
super();
}

public Forum(int id, String userId, String userName, String msg) {
super();
this.id = id;
this.userId = userId;
this.userName = userName;
this.msg = msg;
}

public int getId() {
return id;
}

public void setId(int id) {
this.id = id;
}

public String getUserId() {
return userId;
}

public void setUserId(String userId) {
this.userId = userId;
}

public String getUserName() {
return userName;
}

public void setUserName(String userName) {
this.userName = userName;
}

public String getMsg() {
return msg;
}

public void setMsg(String msg) {
this.msg = msg;
}

@Override
public String toString() {
return "Forum [id=" + id + ", userId=" + userId + ", userName=" + userName + ", msg=" + msg + "]";
}


}
