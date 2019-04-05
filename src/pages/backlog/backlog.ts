import { Component, ViewChild, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ActivitiesPage } from '../activities/activities';
import { BurnChartPage } from '../burn-chart/burn-chart';

@IonicPage()
@Component({
  selector: "page-backlog",
  templateUrl: "backlog.html"
})
export class BacklogPage{
  items: any = {};
  burnChart: any = BurnChartPage;
  activities: any = ActivitiesPage;
  accordionExapanded = false;
  @ViewChild("content") content: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public renderer: Renderer) {
    this.items = this.navParams.get("obj");
  }


  toggleAccordion() {
    if (this.accordionExapanded) {
      this.renderer.setElementStyle(
        this.content.nativeElement,
        "max-height",
        "0px"
      );
    } else {
      this.renderer.setElementStyle(
        this.content.nativeElement,
        "max-height",
        "7000px"
      );
    }

    this.accordionExapanded = !this.accordionExapanded;
  }

}
