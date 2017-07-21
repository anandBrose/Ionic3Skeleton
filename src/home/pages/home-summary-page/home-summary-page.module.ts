import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeSummaryPage } from './home-summary-page';

@NgModule({
  declarations: [
    HomeSummaryPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeSummaryPage),
  ],
  exports: [
    HomeSummaryPage
  ]
})
export class HomeSummaryPageModule {}
