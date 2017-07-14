import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MailUsPage } from './pages/mail-us-page/mail-us-page';
import { ContactPage } from './pages/contact-page/contact';

@NgModule({
  declarations: [
    MailUsPage,
    ContactPage
  ],
  imports: [
    IonicPageModule.forChild(MailUsPage),
    IonicPageModule.forChild(ContactPage)
  ],
  exports: [
    MailUsPage,
    ContactPage
  ]
})
export class ContactModule {}
