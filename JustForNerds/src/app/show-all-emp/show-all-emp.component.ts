import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-all-emp',
  templateUrl: './show-all-emp.component.html',
  styleUrls: ['./show-all-emp.component.css']
})
export class ShowAllEmpComponent implements OnInit {
  emp1:any;
  emp2:any;
  array:any;

  constructor() { 
    this.emp1 = {id:1,name:"Sweety",doj:"Mon Nov 15 2000",gender:"F",salary:1000000,phonenumber: 8885050077, countrycode: 'SG'};
    this.emp2 = {id:2,name:"Simba",doj:"Mon Nov 16 2000",gender:"F",salary:700000, phonenumber: 7584849333, countrycode: 'IN'};
    this.array = [this.emp1, this.emp2];
  }

  ngOnInit() {
  }

}
