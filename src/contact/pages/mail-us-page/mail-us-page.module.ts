import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MailUsPage } from './mail-us-page';

@NgModule({
  declarations: [
    MailUsPage,
  ],
  imports: [
    IonicPageModule.forChild(MailUsPage),
  ],
  exports: [
    MailUsPage
  ]
})
export class MailUsPageModule {}
