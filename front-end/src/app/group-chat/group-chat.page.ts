import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-group-chat',
  templateUrl: './group-chat.page.html',
  styleUrls: ['./group-chat.page.scss'],
})
export class GroupChatPage implements OnInit {

  groupId: number;
  group: any;

  constructor(private service: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.groupId = this.route.snapshot.params['id'];
    this.getGroupById(this.groupId);
  }

  getGroupById(groupId: number) {
    this.service.getGroupById(groupId).subscribe((group: any) => {
      this.group = group[0];
    });
  }

}
