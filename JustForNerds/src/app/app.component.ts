import { Component } from '@angular/core';
declare var toastr: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JustForNerds';
  constructor() {
    //toastr.success('Hi', 'Welcome to JustForNerds');
  }
}
