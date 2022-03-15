import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username: string;
  firstname: string;
  lastname: string;
  password: string;

  constructor(private service: ApiService, private router: Router) { }

  ngOnInit() {
  }

  register(username: string, firstname: string, lastname: string, password: string) {
    console.log(username, password)
    this.service.register(username, firstname, lastname, password).subscribe((user) => {
      this.router.navigate(["/login"]);
      console.log(user)
    })
  }

}
