import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeSummaryPage } from '../home-summary-page/home-summary-page'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  summary(){
  	this.navCtrl.push(HomeSummaryPage);
  }
}
