import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';


@Component({
  selector: 'app-showgallery',
  templateUrl: './showgallery.component.html',
  styleUrls: ['./showgallery.component.css']
})
export class ShowgalleryComponent implements OnInit {
 
  books: any;
  constructor(private service: EmpService) { }

  ngOnInit() {
    this.books = [{bookid: 1001, bookname: 'Percy Jackson', author: 'Rick Riordan',
    price: 199.99,  imagePath: 'assets/percyJack.jpg'},
     {bookid: 1002, bookname: 'Sherlock Holmes', author: 'Arthur Conon Doyle', price: 399.00,
     imagePath: 'assets/holmes.jpg'},
     {bookid: 1003,bookname: 'Harry Potter', author: 'J.K Rowling', price: 599.00,
     imagePath: 'assets/harryPotter.jpg'},
     {bookid: 1004, bookname: 'The Fault in our stars', author: 'John Green ',
     price: 299.00, imagePath: 'assets/theFault.jpg'},
     {bookid: 1005, bookname: 'Love Story', author: 'Erich Segal', price: 299.00,
     imagePath: 'assets/love.jpg'},
     {bookid: 1006, bookname: 'The Immortals Of Meluha', author: 'Amish Tripathi', price: 299.00,
     imagePath: 'assets/meluha.jpg'},
     {bookid: 1007, bookname: 'The Secret of Nagas', author: 'Amish Tripathi', price: 399.00,
     imagePath: 'assets/secretOfNagas.jpg'},
     {bookid: 1008, bookname: 'The Oath of Vayuputras', author: 'Amish Tripathi', price: 399.00,
     imagePath: 'assets/The_Oath_of_the_Vayuputras.jpg'},
     {bookid: 1009, bookname: 'Nothing Lasts Forever', author: 'Sidney Sheldon', price: 499.00,
     imagePath: 'assets/nothingLastsForever.jpg'},
     {bookid: 1010, bookname: 'After The Darkness', author: 'Sidney Sheldon', price: 499.00,
     imagePath: 'assets/AfterTheDarkness.jpg'},
     {bookid: 1011, bookname: 'Divergent', author: 'Veronica Roth', price: 399.00,
     imagePath: 'assets/Divergent.jpg'},
     {bookid: 1012, bookname: 'Insurgent', author: 'Veronica Roth', price: 399.00,
     imagePath: 'assets/insurgent.jpg'},
     {bookid: 1013, bookname: 'I Too Had A Love Story', author: 'Ravinder Singh', price: 150.00,
     imagePath: 'assets/ITooHadALoveStory.jpg'},
     {bookid: 1014, bookname: 'Can Love Happen Twice', author: 'Ravinder Singh', price: 150.00,
     imagePath: 'assets/CanLoveHappenTwice.jpg'},
     {bookid: 1015, bookname: 'Chicken Soup For The Soul', author: 'Jack Canfield', price: 150.00,
     imagePath: 'assets/chicken.jpg'},
     {bookid: 1016, bookname: 'The Moving Finger', author: 'Agatha Christie', price: 150.00,
     imagePath: 'assets/agatha.jpg'},






    ];
  }

  addToCart(book: any) {
     this.service.addToCart(book);
  }
}
