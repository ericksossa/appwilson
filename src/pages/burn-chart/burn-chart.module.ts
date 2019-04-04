import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BurnChartPage } from './burn-chart';


@NgModule({
  declarations: [
    BurnChartPage,
  ],
  imports: [
    IonicPageModule.forChild(BurnChartPage),
  ],
})
export class BurnChartPageModule {}
