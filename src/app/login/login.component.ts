import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  _form: FormGroup;
  _isLoading = false;

  constructor(private formbuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private _router: Router
  ) {
    this._form = formbuilder.group(
      {
        usuario: ['', Validators.required],
        password: ['', Validators.required],
      }
    );
  }

  Login() {
    if (this._form.value.usuario == "esteban" &&
      this._form.value.password == "123") {
      this._isLoading = true;

      setTimeout(() => {
        this._isLoading = false;
        this._router.navigate(['users']);
      }, 1500);
    }
    else {
      this.error();
      this._form.reset();
      this._isLoading = false;
    }
  }

  private error() {
    this._snackBar.open("Invalid username and password", "Ok", {
      duration: 3000
    });
  }
}