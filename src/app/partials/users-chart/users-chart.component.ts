import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/server.service';
import { UserByRole } from 'src/app/chart/user-by-role';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-users-chart',
  templateUrl: './users-chart.component.html',
  styleUrls: ['./users-chart.component.scss']
})
export class UsersChartComponent implements OnInit {

  public series: UserByRole[];
  public chart: Chart;

  constructor(
    private _server: ServerService
  ) { }

  ngOnInit() {
    this.series = [];
    this._server.chartUserByRole().subscribe(response => {
      response.forEach((item) => {
        this.series.push({ name: item.display_name, y: item.users_count });
      });

      this.chart = new Chart({
        chart: {
          type: 'pie'
        },
        title: {
          text: 'User Group by Role'
        },
        credits: {
          enabled: false
        },
        series: [{
          name: 'Users',
          data: this.series
        }]
      });
    });
  }

}
