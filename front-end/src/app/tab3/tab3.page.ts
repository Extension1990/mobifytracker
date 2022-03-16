import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  user: any;
  loggedInUser: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loggedInUser = localStorage.getItem("loggedInUser");
    this.user = JSON.parse(this.loggedInUser);
  }

  logout() {
    localStorage.removeItem('loggedInUser');
    this.router.navigate(["/login"]);
  }
}
