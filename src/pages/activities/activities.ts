import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-activities',
  templateUrl: 'activities.html',
})
export class ActivitiesPage {
  items: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = this.navParams.get("data");
    console.log(this.items);
  }



}
