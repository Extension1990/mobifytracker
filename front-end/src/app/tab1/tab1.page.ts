import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  users: any;
  user: any;
  loggedInUser: any;

  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.getUsers();
    this.loggedInUser = localStorage.getItem("loggedInUser");
    this.user = JSON.parse(this.loggedInUser);
  }
  
  getUsers() {
    this.service.getUsers().subscribe((users: any) => {
      this.users = users;
    })
  }

}
