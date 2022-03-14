import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string;
  password: string;
  loggedInUser: any;

  constructor(private service: ApiService, public router: Router) { }

  ngOnInit() {
  }

  login(username: string, password: string) {
    console.log(username, password)
    this.service.login(username, password).subscribe((user) => {
      localStorage.setItem("loggedInUser", JSON.stringify(user[0]));
      this.loggedInUser = user;
      // this.router.navigate(["/tabs/tab1"]);
      console.log(this.loggedInUser)
    })
  }

}