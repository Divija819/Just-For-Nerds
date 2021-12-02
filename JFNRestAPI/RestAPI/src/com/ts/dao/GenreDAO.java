package com.ts.dao;

import java.util.List;

import org.hibernate.SessionFactory;

import com.rest.dto.Genre;
import com.ts.db.HibernateTemplate;

public class GenreDAO {
	private SessionFactory factory = null;
	
	public int register(Genre genre) {		
		return HibernateTemplate.addObject(genre);
	}

	public Genre getGenre(int genreId) {
		return (Genre)HibernateTemplate.getObject(Genre.class,genreId);
	}

	public List<Genre> getAllGenres() {
		List<Genre> genres=(List)HibernateTemplate.getObjectListByQuery("From Genres");
		return genres;	
	}
}