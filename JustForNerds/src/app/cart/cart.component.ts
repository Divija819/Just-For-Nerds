import { Component, OnInit } from '@angular/core';
import { EmpService } from './../emp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [];
  user:any;
  retrievedData: any;
  constructor(private service: EmpService,private router: Router) {
  this.cartItems = this.service.cartItems;

  console.log(this.service.cartItems);


  // Using Local Storage
  this.retrievedData = localStorage.getItem('user');
  this.user=JSON.parse(this.retrievedData);
  console.log(this.user);
 

}
  ngOnInit() {
  }
  buynow(book){
    this.router.navigate(['buyNow']);
  }


}
