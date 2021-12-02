import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  message:string;
  name:string;
  age:number;
  isboolean=true;
  remark:any;
  hobbie:any;

  constructor() {
    this.hobbie=['Games','Study','Chatting'];
    this.message="default text"
    this.name="Supraja";
    this.age=20;  
    this.isboolean=true;
    this.remark="hi";
   }

  ngOnInit() {
  }

}
