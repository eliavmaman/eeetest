import {Component, OnInit} from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[] = [];
  all: boolean = false;

  constructor(private service: UsersService) {
  }

  chackUncheckAll() {
    this.all = !this.all;
  }

  ngOnInit() {
    this.service.getAllUsers().then((res: any[]) => {
      this.users = res;
    });
  }

}
