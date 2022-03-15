import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // Node/Express API
  REST_API: string = 'http://127.0.0.1:3000/';

  // HTTP HeadersOptions
  headers = new HttpHeaders ({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT',
    'Access-Control-Allow-Origin': '*',
  });

  constructor(private httpClient: HttpClient) { }

  // Get all users
  getUsers () {
    return this.httpClient.get(this.REST_API + 'users');
  }

  // Get user
  getUserById (id: number) {
    return this.httpClient.get(this.REST_API + 'users/' + id);
  }

  // Register user
  register(username: string, firstname: string, lastname: string, password: string) {
    return this.httpClient.post(this.REST_API + 'register', {username, firstname, lastname, password})
  }

  // Login user
  login(username: string, password: string) {
    return this.httpClient.post(this.REST_API + 'login', {username, password});
  }

  // Add Group
  addGroup(groupName: string, userId: number) {
    return this.httpClient.post(this.REST_API + 'add/group', {groupName, userId});
  }

  // Gets user groups
  getGroups(userId: number) {
    return this.httpClient.get(this.REST_API + 'groups/' + userId);
  }

  // Gets user groups
  getGroupById(groupId: number) {
    return this.httpClient.get(this.REST_API + 'group/' + groupId);
  }

  // Get Chat
  getChat(userId: number, receiverId: number) {
    return this.httpClient.get(this.REST_API + 'chats/' + userId + '/' + receiverId);
  }

  // Get Chat
  getGroupChat(groupId: number) {
    return this.httpClient.get(this.REST_API + 'groupMessages/' + groupId);
  }

  // Send Chat Message
  sendChatMessage(senderId: number, receiverId: number, message: string) {
    return this.httpClient.post(this.REST_API + 'send/chatMessage', {senderId, receiverId, message});
  }

  // Send Group Message
  sendGroupMessage(senderId: number, groupId: number, text: string) {
    return this.httpClient.post(this.REST_API + 'send/groupMessage', {senderId, groupId, text});
  }

}
