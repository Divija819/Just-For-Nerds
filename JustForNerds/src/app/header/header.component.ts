import { Component, OnInit } from '@angular/core';
import { EmpService } from './../emp.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 products = [];
  constructor(private service: EmpService) { }

  ngOnInit() {
    this.service.getForCart().subscribe(result => this.products.push(result));
  }

  myFilter(event) {
    document.getElementById("filterDropdown").classList.toggle("filter");
  }

  onclick = function(event) {
    if (!event.target.matches('#filterbtn')) {
      var genredropdown = document.getElementsByClassName("filterContent");
      var i;
      for (i = 0; i < genredropdown.length; i++) {
        var opendropdown = genredropdown[i];
        if (opendropdown.classList.contains('filter')) {
          opendropdown.classList.remove('filter');
        }
      }
    }
  }

}
