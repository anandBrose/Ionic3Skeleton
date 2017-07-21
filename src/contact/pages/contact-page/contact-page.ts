import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact-page.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }
  mailUs(){
  	this.navCtrl.push("MailUsPage");
  }
}
