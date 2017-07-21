import { NgModule } from '@angular/core';
import { HomeSummaryPageModule } from './pages/home-summary-page/home-summary-page.module';
import { HomePageModule } from './pages/home-page/home-page.module';

@NgModule({
  declarations: [],
  imports: [
    HomeSummaryPageModule,
    HomePageModule,
  ],
  exports: [
    HomeSummaryPageModule,
    HomePageModule
  ]
})
export class HomeModule {}
