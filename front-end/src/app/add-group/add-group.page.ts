import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.page.html',
  styleUrls: ['./add-group.page.scss'],
})
export class AddGroupPage implements OnInit {

  groupName: string;
  userId: number;
  user: any;
  loggedInUser: any;
  group: any;

  constructor(private service: ApiService, private router: Router) { }

  ngOnInit() {
    this.loggedInUser = localStorage.getItem("loggedInUser");
    this.user = JSON.parse(this.loggedInUser);
    this.getGroups(this.user.id);
  }

  addGroup(groupName: string, userId: number) {
    this.service.addGroup(groupName, userId).subscribe((group: any) => {
      this.group = group;
      this.router.navigate(["/tabs/tab2"]);
    });
  }

  getGroups(userId: number) {
    this.service.getGroups(userId).subscribe((groups: any) => {
      // this.groups = groups;
    })
  }

}
