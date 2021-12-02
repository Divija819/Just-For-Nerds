package com.ts.dao;

import java.util.List;


import org.hibernate.SessionFactory;

import com.rest.dto.Books;
import com.rest.dto.BuySell;
import com.ts.db.HibernateTemplate;

public class BuySellDAO {
	private SessionFactory factory = null;
	
	public int register(BuySell buySell) {		
		return HibernateTemplate.addObject(buySell);
	}

	public BuySell getBuySell(int buySellId) {
		return (BuySell)HibernateTemplate.getObject(Books.class,buySellId);
	}

	public List<BuySell> getAllBuySells() {
		List<BuySell> buysells=(List)HibernateTemplate.getObjectListByQuery("From BuySells");
		return buysells;	
	}
}