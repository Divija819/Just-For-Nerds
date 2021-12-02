package com.ts.dao;

import java.util.List;

import org.hibernate.SessionFactory;

import com.rest.dto.Books;
import com.ts.db.HibernateTemplate;

public class BooksDAO {
	private SessionFactory factory = null;
	
	public int register(Books book) {		
		return HibernateTemplate.addObject(book);
	}

	public Books getBook(int bookId) {
		return (Books)HibernateTemplate.getObject(Books.class,bookId);
	}
	
	public int addBook(Books Book) {
		return HibernateTemplate.addObject(Book);
	}

	public List<Books> getAllBooks() {
		List<Books> books=(List)HibernateTemplate.getObjectListByQuery("From Books");
		return books;	
	}
}