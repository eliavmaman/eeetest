import { Component } from '@angular/core';
import {UsersService} from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: any[] = [];
  all: boolean = false;

  constructor(private service: UsersService) {
  }

  chackUncheckAll() {
    this.all = !this.all;
  }

  ngOnInit() {
    this.service.getAllUsers().then((res) => {
      this.users = res;
    });
  }
}
