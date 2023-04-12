import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

form: FormGroup;

constructor(private formbuilder : FormBuilder) {
  this.form = formbuilder.group(
    {
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    }
  );
}}