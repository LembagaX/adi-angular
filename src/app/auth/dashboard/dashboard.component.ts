import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  {

  protected cards: any[];

  constructor() {
    this.cards = [
      { icon: 'view_comfy', title: 'Providers', body: 'All materials Provider', point: '120', type: '' },
      { icon: 'trending_up', title: 'Purchasing Growth', body: 'Increase from last month', point: '45%', type: 'primary' },
      { icon: 'trending_down', title: 'Materials depreciation', body: 'Decrease from last month', point: '5%', type: 'accent' },
      { icon: 'view_comfy', title: 'Providers', body: 'All materials Provider', point: '120', type: '' }
    ];
  }

  chart = new Chart({
    chart: {
      type: 'spline'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Line 1',
        data: [100, 224, 123, 323, 212, 131, 145, 176, 232, 243, 100, 224, 123, 323, 212, 131, 145, 176, 232, 243]
      },
      {
        name: 'Line 2',
        data: [323, 212, 145, 176, 232, 243, 212, 131, 123, 100, 224, 123, 323, 145, 176, 232, 100, 224, 232, 243]
      }
    ]
  });

}
