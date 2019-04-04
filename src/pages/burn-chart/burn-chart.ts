import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import chartJs from 'chart.js';

@IonicPage()
@Component({
  selector: 'page-burn-chart',
  templateUrl: 'burn-chart.html',
})
export class BurnChartPage {
  @ViewChild('lineCanvas') lineCanvas;
  lineChart: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
  }
  // inicializa las graficas
  ngAfterViewInit() {
    setTimeout(() => {
      this.lineChart = this.getLineChart();
    }, 150)
  }

  getChart(context, chartType, data, options?) {
    return new chartJs(context, {
      data,
      options,
      type: chartType
    })
  }
  // logica graficas
  getLineChart() {
    const data = {
      labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      datasets: [{
        label: 'Sprint Days',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgb(0, 178, 255)',
        borderColor: 'rgb(231, 205, 35)',
        borderCapStyle: 'butt',
        borderJoinStyle: 'miter',
        pointRadius: 1,
        pointHitRadius: 10,
        data: [140, 125, 98, 80, 30, 20],
        scanGaps: false,
      }, {
        label: 'Story Points',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgb(117, 0, 49)',
        borderColor: 'rgb(51, 50, 46)',
        borderCapStyle: 'butt',
        borderJoinStyle: 'miter',
        pointRadius: 1,
        pointHitRadius: 10,
        data: [130, 120, 95, 85, 35, 25],
        scanGaps: false,
      }
      ]
    }

    return this.getChart(this.lineCanvas.nativeElement, 'line', data)
  }


}