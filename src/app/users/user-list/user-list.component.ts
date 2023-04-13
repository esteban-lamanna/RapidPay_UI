import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import UsersService from '../users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
  _users: User[];

  constructor(private usersService: UsersService) {
    this._users = [];
  }

  ngOnInit(): void {
    this._users = this.usersService.users;
  }
}