import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private httpClient: HttpClient) {
   
  }

  sendMsg(msg: any) : Observable<any>{
    return this.httpClient.post('RestAPI/webapi/myresource/forum/', msg);
  }

  getAllMsgs() : Observable<any> {
    return this.httpClient.get('RestAPI/webapi/myresource/getMsgs');
  }



}
