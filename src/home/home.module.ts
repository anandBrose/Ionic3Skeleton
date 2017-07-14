import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeSummaryPage } from './pages/home-summary-page/home-summary-page';
import { HomePage } from './pages/home/home';

@NgModule({
  declarations: [
    HomeSummaryPage,
    HomePage
  ],
  imports: [
    IonicPageModule.forChild(HomeSummaryPage),
    IonicPageModule.forChild(HomePage),
  ],
  exports: [
    HomeSummaryPage,
    HomePage
  ]
})
export class HomeModule {}
