import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/report.service';
import { FormControl, Validators } from '@angular/forms';
import { Chart } from 'angular-highcharts';
import { Report } from 'src/app/response/report';
import { Order } from 'src/app/response/order';
import { Product } from 'src/app/response/product';

@Component({
  selector: 'app-analytics-order',
  templateUrl: './analytics-order.component.html',
  styleUrls: ['./analytics-order.component.scss']
})
export class AnalyticsOrderComponent implements OnInit {

  public type: FormControl;
  public chart: Chart;
  public load: boolean;
  public eo: Order;
  public so: Order;
  public ep: Product;
  public sp: Product;

  constructor(
    private _report: ReportService
  ) { }

  ngOnInit() {
    this.type = new FormControl(null, [Validators.required]);
    this.type.valueChanges.subscribe(() => this.fetch());
  }

  public fetch() {
    this.load = true;
    this._report.report(this.type.value).subscribe(response => {
      if (response.orders.length !== 0) {
        this.buildChart(response);
      }
    });
  }

  public buildChart(report: Report) {
    this.ep = report.most_earn_product;
    this.sp = report.most_solded_product;
    this.eo = report.most_earn_order;
    this.so = report.most_solded_order;
    switch (this.type.value) {
      case 'daily':
        this.daily(report);
        break;
      case 'weekly':
        this.weekly(report);
        break;
      case 'monthly':
        this.monthly(report);
        break;
      case 'quarterly':
        this.quarterly(report);
        break;
      case 'yearly':
        this.yearly(report);
        break;
    }
  }

  private daily(report: Report) {
    const line = [];
    const x = [];
    let i = 1;
    report.orders.forEach(order => {
      line.push(order.price);
      x.push(i++);
    });
    this.writeChart(x, line, 'Day Graph');
  }

  private weekly(report: Report) {
    const line = [];
    const x = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let day = '';
    report.orders.forEach(order => {
      if (day !== order.created_at.substr(0, 10)) {
        line.push(order.price);
        day = order.created_at.substr(0, 10);
      } else {
        line[line.length - 1] = line[line.length - 1] + order.price;
      }
    });
    this.writeChart(x, line, 'Week Graph');
  }

  private monthly(report: Report) {
    const line = [];
    const x = [];
    let date = '';
    report.orders.forEach(order => {
      if (date !== order.created_at.substr(0, 10)) {
        line.push(order.price);
        date = order.created_at.substr(0, 10);
        x.push(order.created_at.substr(8, 2));
      } else {
        line[line.length - 1] = line[line.length - 1] + order.price;
      }
    });
    this.writeChart(x, line, 'Month Graph');
  }

  private quarterly(report: Report) {
    const line = [0, 0, 0, 0];
    const x = [
      'First',
      'Second',
      'Third',
      'Fourth'
    ];
    report.orders.forEach(order => {
      const q = +order.created_at.substr(5, 2);
      if (q <= 3) {
        line[0] += order.price;
      } else if (q > 3 && q <= 6) {
        line[1] += order.price;
      } else if (q > 6 && q <= 9) {
        line[2] += order.price;
      } else if (q > 9 && q <= 12) {
        line[3] += order.price;
      }
    });
    this.writeChart(x, line, 'Quarter Graph');
  }

  private yearly(report: Report) {
    const line = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const x = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    report.orders.forEach(order => {
      line[+order.created_at.substr(5, 2) - 1] += order.price;
    });
    this.writeChart(x, line, 'Year Graph');
  }

  private writeChart(x: any[], line: any[], label: string) {
    this.chart = new Chart({
      chart: {
        type: 'spline'
      },
      title: {
        text: label
      },
      yAxis: {
        title: {
          text: 'Income'
        }
      },
      xAxis: {
        title: {
          text: 'Order',
        },
        categories: x
      },
      credits: {
        enabled: false
      },
      series: [
        {
          name: 'Orders',
          data: line
        }
      ]
    });
    this.load = false;
  }
}
