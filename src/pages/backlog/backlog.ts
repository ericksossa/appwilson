import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { ActivitiesPage } from '../activities/activities';
import { BurnChartPage } from '../burn-chart/burn-chart';


@IonicPage()
@Component({
  selector: "page-backlog",
  templateUrl: "backlog.html"
})
export class BacklogPage {
  items: any = {};
  time: any;
  burnChart: any = BurnChartPage;
  activities:any = ActivitiesPage;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toastCtrl: ToastController) {
    this.items = this.navParams.get("obj");
  }

  mostrarHistorias(data: any)  {
    const toast = this.toastCtrl.create({
      message: `${data.history}`,
      position: 'middle',
      showCloseButton: true,
      closeButtonText: 'Ok'

    });
    toast.present();
  }
}
