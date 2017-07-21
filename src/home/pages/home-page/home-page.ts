import { Component } from '@angular/core';
import { NavController, IonicPage, App } from 'ionic-angular';
import { AuthenticationProvider } from "../../../login/providers/authentication-provider"
import { UtilsProvider } from "../../../common/providers/utils.provider"


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home-page.html'
})
export class HomePage {

  constructor(public app: App, public navCtrl: NavController, private authProvider:AuthenticationProvider, private utilsProvider:UtilsProvider) {

  }

  logout(){
  	let loader =  this.utilsProvider.presentLoadingText("loging out..")
  	this.authProvider.logout().subscribe(()=>{
  		loader.dismiss();
  		this.app.getRootNav().pop();
  	})
  }
  summary(){
  	this.navCtrl.push("HomeSummaryPage");
  }
}
