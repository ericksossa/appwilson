import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: "page-backlog",
  templateUrl: "backlog.html"
})
export class BacklogPage {
  items: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = this.navParams.get("obj");


  }
}
