import { NgModule } from '@angular/core';
import { IonicPageModule, IonicPage } from 'ionic-angular';
import { LoginPage } from './login';
import { DashboardPage } from '../dashboard/dashboard';
import { EsqueciPassPage } from '../esqueci-pass/esqueci-pass';
import { CrudUserPage } from '../crud-user/crud-user';

@NgModule({
  declarations: [
    LoginPage
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
})
export class LoginPageModule {}
