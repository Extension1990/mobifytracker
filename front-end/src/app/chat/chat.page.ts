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
  chatReplies: any;
  senderId: number;
  receiverId: number;
  message: string;
  chatMessage: any;
  loggedUser: any;
  loggedInUser: any;

  constructor(private service: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['receiverId'];
    this.getUserById(this.id);
    this.loggedInUser = localStorage.getItem("loggedInUser");
    this.loggedUser = JSON.parse(this.loggedInUser);
    this.getChat(this.loggedUser.id, this.id);
    this.getChatReplies(this.loggedUser.id, this.id);
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
  getChatReplies(userId: number, receiverId: number) {
    this.service.getChatReplies(userId, receiverId).subscribe((chatReplies: any) => {
      this.chatReplies = chatReplies;
    })  
  }

  sendChatMessage(senderId: number, receiverId: number, message: string) {
    this.service.sendChatMessage(senderId, receiverId, message).subscribe((chatMessage) => {
      this.chatMessage = chatMessage;
      this.reset();
      this.getChat(senderId, receiverId);
    })
  }

  reset() {
    this.message = ''
  }

}
