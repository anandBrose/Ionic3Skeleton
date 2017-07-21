import { NgModule } from '@angular/core';
import { LoginPageModule } from './pages/login-page/login-page.module';
import { SignupPageModule } from './pages/signup-page/signup-page.module';
import { AuthenticationProvider }  from "./providers/authentication-provider"

@NgModule({
  declarations: [
  ],
  providers: [AuthenticationProvider],
  imports: [
    LoginPageModule,
    SignupPageModule,
  ],
  exports: [
    LoginPageModule
  ]
})
export class LoginModule {}
