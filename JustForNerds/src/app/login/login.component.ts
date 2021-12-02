import { Component, OnInit } from '@angular/core';
import { EmpService } from './../emp.service';
import { Router } from '@angular/router';

declare var toastr: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any;
  employee: any;
  details:any;

  constructor(private router: Router, private service: EmpService) {
      this.user = {userName: '', password: ''};
  }

  ngOnInit() {
  }

  async validateUser(loginForm: any) {
    console.log('Inside validateUser', loginForm.userName, loginForm.password);
    if (loginForm.userName === 'admin'  && loginForm.password === 'admin') {
      this.service.setUserLoggedIn();
      this.router.navigate(['showgallery']);
    } else {
    await this.service.getEmpByUserPass(loginForm.userName, loginForm.password).then((data: any) => {
      this.details = data;
      if (data != null) {
      this.service.setUserLoggedIn();
      console.log("sucess")
      this.service.setdetails(this.details);
      this.service.setusername(this.details.userName);
      localStorage.setItem('user',JSON.stringify(data));
      //this.router.navigate(['showgallery']);//books
      toastr.success('Login', 'Login Success');
      this.router.navigate(['showgallery']);//books
    } else {
      toastr.success('Login', 'Login Failure');
    }
       },
       (error) => {
        toastr.success('Login', 'Login Failure');
        // this.router.navigate(['products']);
         });
     }
}
}
