import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-showdbimages',
  templateUrl: './showdbimages.component.html',
  styleUrls: ['./showdbimages.component.css']
})
export class ShowdbimagesComponent implements OnInit {

  books: any;

  constructor(private service: EmpService) { }

  ngOnInit() {
    this.service.getBooks().subscribe( (result: any) => {console.log(result); this.books = result; });
  }

  addToCart(book: any) {
    this.service.addToCart(book);
 }

}

