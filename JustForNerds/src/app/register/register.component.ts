import { Component, OnInit } from '@angular/core';
import { EmpService } from './../emp.service';
import { Router } from '@angular/router';

declare var toastr: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: any;
  message: string;
 
  constructor(private router: Router, private service: EmpService) {
    this.user = {
      userName: '',
      password: '',
      mobileNo: '',
      address: ''
        };
  }
  ngOnInit() {
    this.service.getAllUsers().subscribe( (result: any) => {console.log(result); this.user = result; });
  }

  regEmp() {
    console.log('Inside Ts:' ,this.user);
    this.service.registerUser(this.user).subscribe(
      (res) => {
          console.log('success');
         toastr.success('Reg', 'Registration Success');
         this.router.navigate(['showgallery']);
      },
      (err) => { this.message = err.error.text;
                 console.log('Register Failure..');
                 toastr.success('Reg', 'Registration Failure');
      }
    );
  }
}
