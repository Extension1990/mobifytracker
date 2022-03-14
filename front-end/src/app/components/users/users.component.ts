import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: any;

  constructor(private service: MainService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  
  getUsers() {
    this.service.getUsers().subscribe((users: any) => {
      this.users = users;
      console.log(this.users);
    })
  }

}
