import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateRoutingModule } from './template-routing.module';
import { MaterialModule } from '../material/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { TemplateComponent } from './template.component';
import { UserComponent } from './users/user/user.component';

@NgModule({
  declarations: [
    NavbarComponent,
    TemplateComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    MaterialModule
  ]
})

export class TemplateModule {


}