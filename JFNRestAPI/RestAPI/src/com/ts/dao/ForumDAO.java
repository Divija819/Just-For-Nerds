package com.ts.dao;

import java.util.List;

import com.rest.dto.Forum;
import com.ts.db.HibernateTemplate;

public class ForumDAO {

public static Object post(Forum msg) {

System.out.println("Inside DAO.." + msg);
//java.util.Date utilDate = new java.sql.Date(student.getJoinDate().getTime());
return HibernateTemplate.addMsg(msg);

}

public List<Forum> getAllMsgs() {
List<Forum> forum = (List)HibernateTemplate.getObjectListByQuery("From Forum");
System.out.println("Inside All Employees ..."+forum);
return forum;
}

}