import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-categories-chart',
  templateUrl: './categories-chart.component.html',
  styleUrls: ['./categories-chart.component.scss']
})
export class CategoriesChartComponent implements OnInit {

  @Input() public type: string;

  public chart: Chart;
  public loading: boolean;
  public datas: { name: string; y: number; }[];

  constructor(
    private _category: CategoryService
  ) {}

  ngOnInit() {
    this.defaultConf();
  }

  private defaultConf() {
    this.loading = true;
    if (this.type == null) {
      this.type = 'pie';
    }
    this.datas = [];
    this._category.index().subscribe(response => {
      response.forEach( element => {
        this.datas.push({
          name: element.name,
          y: element.products.length
        });
      });
      this.loading = false;
      this.buildChart();
    });
  }

  private buildChart() {
    this.chart = new Chart({
      chart: {
        type: this.type
      },
      title: {
        text: 'Product count by Category'
      },
      credits: {
        enabled: true
      },
      series: [
        {
          name: 'Product in this category',
          data: this.datas
        }
      ]
    });
  }

}
