import { Component } from '@angular/core';
import { NavController, Refresher, reorderArray } from 'ionic-angular';

import { AVATAR } from '../../data/data.interface';
import { Data } from '../../interfaces/data.interface';
import { BacklogPage } from '../backlog/backlog';

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  items: Data[] = [];
  ordenando: boolean = false;

  constructor(private navCtrl: NavController) {
    this.items = AVATAR.slice(0);
    console.log(this.items);

  }

  borrarAnimal(idx: number) {
    this.items.splice(idx, 1);
  }

  recargar(refresher: Refresher) {
    console.log("Inicio del refresher");

    setTimeout(() => {
      console.log("Termino");
      this.items = AVATAR.slice(0);
      refresher.complete();
    }, 1500);
  }

  //metodo para reodenar animales temporalmente.
  reordenar(indices: any) {
    this.items = reorderArray(this.items, indices);
  }

  verDetalles(obj:any) {
    this.navCtrl.push(BacklogPage,{obj});
  }
}
