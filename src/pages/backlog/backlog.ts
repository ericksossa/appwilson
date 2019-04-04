import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { BurnChartPage } from '../burn-chart/burn-chart';
import { ActivitiesPage } from '../activities/activities';


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

  mostrarHistorias(data: any) {
    const toast = this.toastCtrl.create({
      message: `Quiero: ${data.quiero}\n\
      Para: ${data.para}`,
      position: 'middle',
      showCloseButton: true,
      closeButtonText: 'Ok'

    });
    toast.present();
  }
}
