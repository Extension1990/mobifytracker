import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  user: any;

  constructor(private service: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    console.log(id)
    this.getUserById(id);
  }

  getUserById(id: string) {
    this.service.getUserById(id).subscribe((user: any) => {
      this.user = user[0];
    })
  }

}
