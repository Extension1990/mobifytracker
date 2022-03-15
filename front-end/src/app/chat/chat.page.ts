import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  id: number;
  user: any;
  chat: any;
  senderId: number;
  receiverId: number;
  message: string;
  chatMessage: any;
  loggedUser: any;
  loggedInUser: any;

  constructor(private service: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getUserById(this.id);
    this.loggedInUser = localStorage.getItem("loggedInUser");
    this.loggedUser = JSON.parse(this.loggedInUser);
    this.getChat(this.loggedUser.id, this.id);
  }

  getUserById(id: number) {
    this.service.getUserById(id).subscribe((user: any) => {
      this.user = user[0];
    })
  }

  getChat(userId: number, receiverId: number) {
    this.service.getChat(userId, receiverId).subscribe((chat: any) => {
      this.chat = chat;
    })
  }

  sendChatMessage(senderId: number, receiverId: number, message: string) {
    this.service.sendChatMessage(senderId, receiverId, message).subscribe((chatMessage) => {
      this.chatMessage = chatMessage;
      this.getChat(senderId, receiverId);
      console.log(this.chatMessage)
    })
  }

}
