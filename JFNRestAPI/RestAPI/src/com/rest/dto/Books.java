package com.rest.dto;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Books {
	@Id@GeneratedValue
	private int bookId;
	private String bookName;
	private String imageName;
	private String author;
	private float price;
	private String description;

	@ManyToOne
	@JoinColumn(name="GenreId")
	private Genre genre;
	
	@OneToMany(mappedBy = "user")
	private List<BuySell> buysell = new ArrayList<BuySell>();

	
	public Books(int bookId, String bookName, String imageName, String author, float price, String description,
			Genre genre, List<BuySell> buysell) {
		super();
		this.bookId = bookId;
		this.bookName = bookName;
		this.imageName = imageName;
		this.author = author;
		this.price = price;
		this.description = description;
		this.genre = genre;
		this.buysell = buysell;
	}


	public Books() {
		super();
		
	}


	public int getBookId() {
		return bookId;
	}


	public void setBookId(int bookId) {
		this.bookId = bookId;
	}


	public String getBookName() {
		return bookName;
	}


	public void setBookName(String bookName) {
		this.bookName = bookName;
	}


	public String getImageName() {
		return imageName;
	}


	public void setImageName(String imageName) {
		this.imageName = imageName;
	}


	public String getAuthor() {
		return author;
	}


	public void setAuthor(String author) {
		this.author = author;
	}


	public float getPrice() {
		return price;
	}


	public void setPrice(float price) {
		this.price = price;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public Genre getGenre() {
		return genre;
	}


	public void setGenre(Genre genre) {
		this.genre = genre;
	}


	public List<BuySell> getBuysell() {
		return buysell;
	}


	public void setBuysell(List<BuySell> buysell) {
		this.buysell = buysell;
	}
		
}