import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-bestsellers',
  templateUrl: './bestsellers.component.html',
  styleUrls: ['./bestsellers.component.css']
})
export class BestsellersComponent implements OnInit {
  books: any;
  constructor(private service: EmpService) { }

  ngOnInit() {
    this.books = [{bookid: 1001, bookname: 'Where the Crawdads Sing', author: 'Delia Owens',
    price: 137.00,  imagePath: 'assets/where-the-crawdads-sing.jpg'},
     {bookid: 1002, bookname: 'Becoming', author: 'Michelle Obama', price: 999.99,
     imagePath: 'assets/Becoming.jpg'},
     {bookid: 1003, bookname: 'Educated', author: 'Tara Westover', price: 499.99,
     imagePath: 'assets/Educated.jpg'},
     {bookid: 1004, bookname: 'Girl,Wash Your Face', author: 'Rachel Hollis',
     price: 199.90, imagePath: 'assets/Girl.jpg'},
     {bookid: 1005, bookname: 'Girl,Stop Apologizing', author: 'Rachel Hollis', price: 170.99,
     imagePath: 'assets/Girlstopapologizing.jpg'},
     {bookid: 1006, bookname: 'Crazy Rich Asians', author: 'Kevin Kwan', price: 300.99,
     imagePath: 'assets/rich.png'},
     {bookid: 1007, bookname: 'China Rich Girl', author: 'Kevin Kwan', price: 299.99,
     imagePath: 'assets/crazy.jpg'},
     {bookid: 1008, bookname: 'All The Light We Cannot See', author: 'Anthony Doerr', price: 199.99,
     imagePath: 'assets/all.jpg'},
     {bookid: 1009, bookname: 'The Last Romantics', author: 'Tara Conklin', price: 299.99,
     imagePath: 'assets/city.jpg'},
     {bookid: 1010, bookname: 'Eight Lives', author: 'Susan Hurley', price: 399.99,
     imagePath: 'assets/eight.jpg'},
     {bookid: 1011, bookname: 'The Subtle Art Of Not Giving A Fuck', author: 'Mark Manson', price: 200.99,
     imagePath: 'assets/fuck.jpg'},
     {bookid: 1012, bookname: 'Backlash', author: 'Brad Thor', price: 199.99,
     imagePath: 'assets/kquewgb.jpg'},
     {bookid: 1013, bookname: 'City Of Girls', author: 'Elizibith Gilberts', price: 69.99,
     imagePath: 'assets/tara.jpg'},
    ];
  }

  addToCart(book: any) {
     this.service.addToCart(book);
  }
}



