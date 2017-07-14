import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './pages/login-page/login-page';
import { SignupPage } from './pages/signup-page/signup-page';

@NgModule({
  declarations: [
    LoginPage,
    SignupPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    IonicPageModule.forChild(SignupPage),
  ],
  exports: [
    LoginPage
  ]
})
export class LoginModule {}
