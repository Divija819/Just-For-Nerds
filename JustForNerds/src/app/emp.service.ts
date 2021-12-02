import { Injectable, Pipe } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  cartItems = [];
  bookToBeAdded: Subject<any>;
  isUserLogged: boolean;
  userName: any;
  data: any;

  constructor(private httpClient: HttpClient) {
    this.isUserLogged = false;
    this.bookToBeAdded = new Subject();
  }
  setUserLoggedIn() {
    this.isUserLogged = true;
  }

  setUserLoggedIOut() {
    this.isUserLogged = false;
  }

  getUserLogged() {
    return this.isUserLogged;
  }

  getAllUsers() {
    return this.httpClient.get('RestAPI/webapi/myresource/getUsers').pipe(retry(10));
  }

  registerUser(user: any) {
    console.log('Inside service...', ' ', user);
    return this.httpClient.post('RestAPI/webapi/myresource/registerJ', user);
  }

  addToCart(book) {
    this.bookToBeAdded.next(book);
    this.cartItems.push(book);
  }
  getForCart() {
    return this.bookToBeAdded.asObservable();
  }

  postFile(ImageForm: any, fileToUpload: File) {
    console.log('Hi...');
    const endpoint = 'RestAPI/webapi/myresource/uploadImage';
    const formData: FormData = new FormData();
    formData.append('Image', fileToUpload, fileToUpload.name);
    formData.append('bookName', ImageForm.bookName);
    formData.append('description', ImageForm.description);
    formData.append('price', ImageForm.price); 
    return this.httpClient.post(endpoint, formData);
  }


  getEmpByUserPass(userName: string, password: string): any {
    console.log('Inside service:' , userName, password);
    return this.httpClient.get('RestAPI/webapi/myresource/getEmpByUserPass/' + userName + '/' + password).toPromise();
    }

    getImage(): Observable<any> {
      console.log('Inside Service...');
      return this.httpClient.get('RestAPI/webapi/myresource/downloadImage', { responseType: 'blob' });
   }
   getBooks() {
    return this.httpClient.get('RestAPI/webapi/myresource/getBooks').pipe(retry(10));
   }
   setusername(username :string){
     this.userName = username;
   }
   getusername(){
     return this.userName;
   }
   setdetails(details:any){
     this.data = details;
   }
   getdetails(){
    return this.data;
  }
}
