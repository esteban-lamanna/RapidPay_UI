import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
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