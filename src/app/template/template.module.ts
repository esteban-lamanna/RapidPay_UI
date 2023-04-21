import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateRoutingModule } from './template-routing.module';
import { MaterialModule } from '../material/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { TemplateComponent } from './template.component';
import { UserComponent } from './users/user/user.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent,
    TemplateComponent,
    UserComponent,
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})

export class TemplateModule {


}