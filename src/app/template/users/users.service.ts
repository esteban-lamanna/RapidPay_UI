import { Injectable, OnInit } from '@angular/core';
import { User } from './models/user';


@Injectable({
  providedIn: 'root'
})
export default class UsersService implements OnInit {

  constructor() {

  }

  private _users: User[] = [
    { name: 'Esteban', lastName: 'Lamanna', dateOfBirth: new Date() },
    { name: 'Juancito', lastName: 'ASD', dateOfBirth: new Date(1990, 1, 1) },
    { name: 'Juancito', lastName: 'ASD', dateOfBirth: new Date(1991, 1, 1) },
    { name: 'Juancito', lastName: 'ASD', dateOfBirth: new Date(1992, 1, 1) },
    { name: 'Juancito', lastName: 'ASD', dateOfBirth: new Date(1993, 1, 1) },
    { name: 'Juancito', lastName: 'ASD', dateOfBirth: new Date(1994, 1, 1) },
    { name: 'Juancito', lastName: 'ASD', dateOfBirth: new Date(1995, 1, 1) },
    { name: 'Juancito', lastName: 'ASD', dateOfBirth: new Date(1996, 1, 1) },
    { name: 'Juancito', lastName: 'ASD', dateOfBirth: new Date(1997, 1, 1) },
    { name: 'Juancito', lastName: 'ASD', dateOfBirth: new Date(1998, 1, 1) },
    { name: 'Juancito', lastName: 'ASD', dateOfBirth: new Date(1999, 1, 1) },
    { name: 'Juancito', lastName: 'ASD', dateOfBirth: new Date(2000, 1, 1) },
  ];

  getUsers() {
    return this._users;
  }

  delete(id: number) {
    this._users.splice(id, 1);
  }

  ngOnInit(): void {
  }
}