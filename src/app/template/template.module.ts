import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateRoutingModule } from './template-routing.module';
import { MaterialModule } from '../material/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { TemplateComponent } from './template.component';

@NgModule({
  declarations: [
    NavbarComponent,
    TemplateComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    MaterialModule
  ]
})

export class TemplateModule {


}