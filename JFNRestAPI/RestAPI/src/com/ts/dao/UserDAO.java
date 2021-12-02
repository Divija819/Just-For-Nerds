package com.ts.dao;

import java.util.List;

import org.hibernate.SessionFactory;

//import com.rest.dto.Employee;
import com.rest.dto.User;
import com.ts.db.HibernateTemplate;

public class UserDAO {
	private SessionFactory factory = null;
	
	public static User getEmpByUserPass(String userName,String password) {																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																															

		return (User)HibernateTemplate.getObjectByUserPass(userName,password);
	}
	public int register(User user) {		
		return HibernateTemplate.addObject(user);
	}

	public User getUser(int UserId) {
		return (User)HibernateTemplate.getObject(User.class,UserId);
	}

	public List<User> getAllUsers() {
		List<User> users=(List)HibernateTemplate.getObjectListByQuery("From User");
		return users;	
	}
}