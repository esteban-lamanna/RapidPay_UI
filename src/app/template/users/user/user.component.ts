import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../models/user';


const ELEMENT_DATA: User[] = [
  { name: 'Esteban', lastName: 'Lamanna', dateOfBirth: new Date() },
  { name: 'Juancito', lastName: 'ASD', dateOfBirth: new Date(1990, 1, 1) },
];

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  _displayedColumns: string[] = ['name', 'lastName', 'dateOfBirth', 'actions'];
  _dataSource = new MatTableDataSource(ELEMENT_DATA);
}
