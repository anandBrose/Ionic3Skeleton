import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, AlertController } from 'ionic-angular';
import { AuthenticationProvider } from "../../providers/authentication-provider";
import { UtilsProvider } from "../../../common/providers/utils.provider";
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login-page',
  templateUrl: 'login-page.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public utilsProvider:UtilsProvider, public authProvider:AuthenticationProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  signIn(username, password){

    let loader = this.utilsProvider.presentLoadingText("Signing in..");
    
    this.authProvider.authenticate(username.value, password.value).subscribe((success)=>{
      loader.dismiss();
      if(success){
        username.value = "";
        password.value = "";
        this.navCtrl.push("Tabs");  	    
      } else {
        this.utilsProvider.showAlert("Failed", "Username/Password Wrong");
      }
    })
  }
  signUp(){
  	this.navCtrl.push("SignupPage");
  }
}
