import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../models/user';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import UsersService from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements AfterViewInit, OnInit {
  _displayedColumns: string[] = ['name', 'lastName', 'dateOfBirth', 'actions'];
  _dataSource!: MatTableDataSource<User>;
  @ViewChild(MatPaginator) _paginator!: MatPaginator;
  @ViewChild(MatSort) _sort!: MatSort;

  constructor(private _usersService: UsersService) {

  }

  ngOnInit(): void {
    this.loadUsers();
  }

  ngAfterViewInit() {
    this._dataSource.paginator = this._paginator;
    this._dataSource.sort = this._sort;
  }

  loadUsers() {
    this._dataSource = new MatTableDataSource<User>(this.getUsers());
  }

  private getUsers() {
    return this._usersService.getUsers();
  }

  deleteUser(id: number) {
    this._usersService.delete(id);
    this._dataSource.data = this._usersService.getUsers();
  }
}