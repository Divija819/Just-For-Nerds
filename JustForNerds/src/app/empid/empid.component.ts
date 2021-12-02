import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empid',
  templateUrl: './empid.component.html',
  styleUrls: ['./empid.component.css']
})
export class EmpidComponent implements OnInit {
  user1 : any;
  user2 : any;
  user3 : any;
  user4 : any;
  employees : any;
  id : any;

  constructor() {
    this.id = ''
    this.user1 = {empId: 101, empName:"Sweety", salary: 1000000, gender: "F", doj: "21-01-1999"};
    this.user2 = {empId: 102, empName:"A", salary: 990000, gender: "M", doj: "12-08-1999"};
    this.user3 = {empId: 103, empName:"B", salary: 300000, gender: "F", doj: "08-02-2008"};
    this.user4 = {empId: 104, empName:"C", salary: 400000, gender: "M", doj: "01-06-1990"};
    this.employees = [this.user1, this.user2, this.user3, this.user4];
   }

  ngOnInit() {
  }
  displaybyid() {
    for (let e of this.employees) {
      if(this.id == e.empId) {
        console.log(e.empId);
        console.log(e.empName);
        console.log(e.salary);
        console.log(e.gender);
        console.log(e.doj);
      }
    }
  }
}
