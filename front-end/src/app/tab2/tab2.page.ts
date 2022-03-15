import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  groups: any;
  user: any;
  loggedInUser: any;

  constructor(private service: ApiService) {}

  ngOnInit() {
    this.loggedInUser = localStorage.getItem("loggedInUser");
    this.user = JSON.parse(this.loggedInUser);
    this.getGroups(this.user.id);
  }

  getGroups(userId: number) {
    this.service.getGroups(userId).subscribe((groups: any) => {
      this.groups = groups;
    })
  }
}
