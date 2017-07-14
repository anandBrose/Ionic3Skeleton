import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginModule } from '../login/login.module'
import { HomeModule } from '../home/home.module'
import { ContactModule } from '../contact/contact.module'


@NgModule({
  declarations: [
  ],
  imports: [
  	LoginModule,
  	HomeModule,
  	ContactModule
  ],
  exports: [
  	LoginModule,
  	HomeModule,
  	ContactModule
  ]
})
export class CommonModule {}
