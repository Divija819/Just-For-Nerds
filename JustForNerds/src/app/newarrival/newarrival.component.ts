import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-newarrival',
  templateUrl: './newarrival.component.html',
  styleUrls: ['./newarrival.component.css']
})
export class NewarrivalComponent implements OnInit {

  books: any;
  constructor(private service: EmpService) { }

  ngOnInit() {
    this.books = [{bookid: 1007, bookname: 'Raavan:Enemy of AryaVartra', author: 'Amish Tripathi',
    price: 199.99,  imagePath: 'assets/Raavan.jpg'},
     {bookid: 1008, bookname: 'The Magic Weight-Loss Pill: 62 Lifestyle Changes', author: 'Luke Coutinho & Anushka Shetty', price: 181.99,
     imagePath: 'assets/TheMagic.jpg'},
     {bookid: 1009,bookname: 'Wake Up, Life is Calling ', author: 'Preeti Shenoy', price: 99.99,
     imagePath: 'assets/Wakeup.jpg'},
     {bookid: 1010, bookname: 'Oswaal CBSE Question Bank Class 10 Science Chapterwise & Topicwise Includes Objective Types & MCQs', author: 'Oswaal ',
     price: 370.99, imagePath: 'assets/oswaal.jpg'},
     {bookid: 1012, bookname: 'Best of Tenali Raman', author: 'Rungeen Singh', price: 69.99,
     imagePath: 'assets/Tenaliram.jpg'},
     {bookid: 1013, bookname: 'Mrs. Everything', author: 'Jennifer Weiner', price: 100.99,
     imagePath: 'assets/everything.jpg'},
     {bookid: 1014, bookname: 'Dead Sea Rising', author: 'Jerry B.Jenkins', price: 299.99,
     imagePath: 'assets/dead.jpg'},
     {bookid: 1015, bookname: 'The Age Of Light', author: 'Whitney Scherer', price: 500.99,
     imagePath: 'assets/age.jpg'},
     {bookid: 1016, bookname: 'The Reckoning', author: 'John Grisham', price: 250.99,
     imagePath: 'assets/jon.jpg'},
     {bookid: 1017, bookname: 'Under Currents', author: 'Nora Roberts', price: 400.99,
     imagePath: 'assets/uwetyr.jpg'},
     {bookid: 1018, bookname: 'The Tattooist of Aushwitz', author: 'Heather Morris', price: 200.99,
     imagePath: 'assets/uwtrtg.jpg'},
    ];
  }

  addToCart(book: any) {
     this.service.addToCart(book);
  }
}
