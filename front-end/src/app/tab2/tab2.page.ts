import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  groups: any;

  constructor(private service: ApiService) {}

  ngOnInit(): void {
    this.getGroups();
  }

  getGroups() {
    this.service.getGroups().subscribe((groups: any) => {
      this.groups = groups;
      console.log(this.groups)
    })
  }
}
