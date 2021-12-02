package com.rest.dto;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class BuySell {
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "loginId")
	private User user;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "bookId")
	private Books books;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "image")
	private Books image;
	
	@Column(name = "buyerName")
	
	private String buyerName;
	@Column(name = "SellerName")
	private String sellerName;
	@Column(name = "TransactionAmount")
	private float transactionAmount;
	@Column(name = "DateOfTransaction")
	private String dateOfTransaction;
	@Column
	@Id@GeneratedValue
	private int buyerId;
	
	public BuySell() {
		super();
		// TODO Auto-generated constructor stub
	}
	public BuySell(User user, Books books, Books image, String buyerName, String sellerName, float transactionAmount,
			String dateOfTransaction, int buyerId) {
		super();
		this.user = user;
		this.books = books;
		this.image = image;
		this.buyerName = buyerName;
		this.sellerName = sellerName;
		this.transactionAmount = transactionAmount;
		this.dateOfTransaction = dateOfTransaction;
		this.buyerId = buyerId;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Books getBooks() {
		return books;
	}
	public void setBooks(Books books) {
		this.books = books;
	}
	public Books getImage() {
		return image;
	}
	public void setImage(Books image) {
		this.image = image;
	}
	public String getBuyerName() {
		return buyerName;
	}
	public void setBuyerName(String buyerName) {
		this.buyerName = buyerName;
	}
	public String getSellerName() {
		return sellerName;
	}
	public void setSellerName(String sellerName) {
		this.sellerName = sellerName;
	}
	public float getTransactionAmount() {
		return transactionAmount;
	}
	public void setTransactionAmount(float transactionAmount) {
		this.transactionAmount = transactionAmount;
	}
	public String getDateOfTransaction() {
		return dateOfTransaction;
	}
	public void setDateOfTransaction(String dateOfTransaction) {
		this.dateOfTransaction = dateOfTransaction;
	}
	public int getBuyerId() {
		return buyerId;
	}
	public void setBuyerId(int buyerId) {
		this.buyerId = buyerId;
	}
	
}
	
	