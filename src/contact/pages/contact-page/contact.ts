import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MailUsPage } from '../mail-us-page/mail-us-page';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }
  mailUs(){
  	this.navCtrl.push(MailUsPage);
  }
}
