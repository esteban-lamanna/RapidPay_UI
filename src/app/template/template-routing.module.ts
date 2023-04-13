import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template.component';
import { UserComponent } from './users/user/user.component';

const routes: Routes = [
  {
    path: '', component: TemplateComponent, children: [{ path: 'users', component: UserComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TemplateRoutingModule { }
