import { NgModule } from '@angular/core';
import { MailUsPageModule } from './pages/mail-us-page/mail-us-page.module';
import { ContactPageModule } from './pages/contact-page/contact-page.module';

@NgModule({
  declarations: [],
  imports: [
    MailUsPageModule,
    ContactPageModule
  ],
  exports: [
    MailUsPageModule,
    ContactPageModule
  ]
})
export class ContactModule {}
