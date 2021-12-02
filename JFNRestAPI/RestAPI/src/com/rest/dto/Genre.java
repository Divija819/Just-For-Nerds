package com.rest.dto;

import java.util.ArrayList;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Genre {

	@Id@GeneratedValue
	private int genreId;
	@Column
	private String type;

	@OneToMany(mappedBy="genre",cascade=CascadeType.ALL)
	private List<Books> Books=new ArrayList<Books>();

	public Genre(int genreId, String type, List<com.rest.dto.Books> books) {
		super();
		this.genreId = genreId;
		this.type = type;
		Books = books;
	}
	

	public Genre() {
		super();
		// TODO Auto-generated constructor stub
	}


	public int getGenreId() {
		return genreId;
	}

	public void setGenreId(int genreId) {
		this.genreId = genreId;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public List<Books> getBooks() {
		return Books;
	}

	public void setBooks(List<Books> books) {
		Books = books;
	}
}