import { Injectable, OnInit } from '@angular/core';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})

export default class UsersService implements OnInit {
  users: User[];

  constructor() {
    this.users = [];
  }

  ngOnInit(): void {
  }
}