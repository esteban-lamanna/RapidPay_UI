import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import UsersService from '../users.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})

export class CreateUserComponent {
  _form: FormGroup;
  _loading: boolean = false;

  constructor(private fb: FormBuilder,
    private _router: Router,
    private _usersService: UsersService,
    private _snackBar: MatSnackBar) {
    this._form = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
    });
  }

  createUser() {
    this._loading = true;

    let user: User = {
      name: this._form.value.name,
      lastName: this._form.value.lastName,
      dateOfBirth: this._form.value.dateOfBirth,
    };

    this.saveUser(user);

    this._snackBar.open("User added successfully.", 'Ok');

    this._loading = false;
  }

  saveUser(user: User) {
    this._usersService.add(user);
    this._router.navigate(['/template/users']);
  }

  cancel() {
    this._form.reset();
    this._router.navigate(['/template/users']);
  }
}