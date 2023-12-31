import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { LoginPageComponent } from './admin-layout/pages/login-page/login-page.component';
@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: AdminLayoutComponent, children: [
          {path: '', redirectTo: '/admin/login', pathMatch: "full"},
          {path: 'login', component: LoginPageComponent}
        ]}
    ])
  ],
  exports: [RouterModule]
})
export class AdminModule { }
