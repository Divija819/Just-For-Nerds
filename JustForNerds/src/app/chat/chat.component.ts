import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
userName : any;
  // trainer : any;
  msg : any;
  forum : any;
  text : any;
  data: any;
 
  constructor(private chatService: ChatService, private empService: EmpService ) { 
    this.msg = "";
    this.text = {
     
      userName : "",
      msg : ""
       
 
    }
  }

  ngOnInit() {
    this.userName = this.empService.getusername();
    this.data =  this.empService.getdetails();
    this.chatService.getAllMsgs().subscribe(data =>{
      this.forum= data;
    });
  }

  addToForum() {
    // this.text.userId = this.trainerId;
    this.text.userName = this.userName;
    this.text.msg = this.msg;
    console.log(this.text);
    this.chatService.sendMsg(this.text).subscribe();
    this.msg = "";
    this.ngOnInit();

  }
}