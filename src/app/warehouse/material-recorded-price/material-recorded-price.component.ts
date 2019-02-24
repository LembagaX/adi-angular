import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { Material } from 'src/app/response/material';

@Component({
  selector: 'app-material-recorded-price',
  templateUrl: './material-recorded-price.component.html',
  styleUrls: ['./material-recorded-price.component.scss']
})
export class MaterialRecordedPriceComponent implements OnInit {

  public chart: Chart;

  @Input() material: Material;

  constructor() { }

  ngOnInit() {
    this.buildChart('spline');
  }

  public buildChart(type: string) {
    const series = [];
    console.log(this.material);
    this.material.providers.forEach(provider => {
      series.push({
        id: provider.id,
        name: provider.name,
        data: [0]
      });
    });
    this.material.prices.forEach(price => {
      series.find(provider => provider.id === price.provider_id).data.push(price.amount);
    });
    this.chart = new Chart({
      chart: {
        type: type,
      },
      yAxis: {
        title: {
          text: 'Prices'
        }
      },
      xAxis: {
        title: {
          text: 'Purchasing Records'
        }
      },
      title: {
        text: 'Recorded Price Changes'
      },
      credits: {
        enabled: true
      },
      series: series
    });
  }

  public redbuildChart(type: string) {
    this.chart.destroy();
    this.buildChart(type);
  }
}
