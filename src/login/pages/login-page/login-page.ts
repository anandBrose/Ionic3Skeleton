import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {TabsPage} from "../../../tabs/tabs"
import {SignupPage} from "../signup-page/signup-page"

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login-page',
  templateUrl: 'login-page.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  signIn(){
  	this.navCtrl.push(TabsPage);
  }
  signUp(){
  	this.navCtrl.push(SignupPage);
  }
}
